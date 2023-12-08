import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { editProfileActions, getProfileFormData, updateProfileData } from "features/EditProfileData";
import { Input } from "shared/ui/Input/Input";
import cls from './ProfileEditForm.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ChangeEvent, useCallback, useState } from "react";
import { fetchProfileData, getProfileIsLoading, IProfile } from "_entities/Profile";
import { Loader } from "shared/ui/Loader";
import { Currency, CurrencySelect } from "_entities/Currency";
import { CountrySelect } from "_entities/Country";

import { Country } from "_entities/Country/model/types/country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ValidateProfileError } from "_entities/Profile/model/types/profile";
import { validateProfileData } from "_entities/Profile/model/services/validateProfileData/validateProfileData";

interface IProfileEditModalProps {
    className?: string;
    onClose?: () => void;
}

export const ProfileEditForm = ({ className, onClose }: IProfileEditModalProps) => {
    const [ errors, setErrors ] = useState<ValidateProfileError[]>([]);
    const { t } = useTranslation();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const dispatch = useAppDispatch();

    const onEditProfileData = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
        case 'first':
            dispatch(editProfileActions.updateProfile({ first: e.target.value }));
            break;
        case 'lastname':
            dispatch(editProfileActions.updateProfile({ lastname: e.target.value }));
            break;
        case 'username':
            dispatch(editProfileActions.updateProfile({ username: e.target.value }));
            break;
        case 'age':
            dispatch(editProfileActions.updateProfile({ age: +e.target.value }));
            break;
        case 'city':
            dispatch(editProfileActions.updateProfile({ city: e.target.value }));
            break;
        case 'avatar':
            dispatch(editProfileActions.updateProfile({ avatar: e.target.value }));
            break;
        default:
            break;
        }
    };

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(editProfileActions.updateProfile({ currency }));
    }, [ dispatch ]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(editProfileActions.updateProfile({ country }));
    }, [ dispatch ]);

    const onCanceled = useCallback(() => {
        dispatch(editProfileActions.cancelEdit());
        setErrors([]);
        onClose?.();
    }, [ dispatch, onClose ]);

    const onSave = useCallback((formData?: IProfile) => {

        const validateErrors = validateProfileData(formData);
        if (validateErrors.length) {
            setErrors(validateErrors);
            return;
        }

        (async () => {
            const res = await dispatch(updateProfileData({ ...formData }));
            if (res.type.includes('fulfilled')) {
                onClose?.();
                dispatch(fetchProfileData());
            }
        })();
    }, [ dispatch, onClose ]);


    return (
        <form className={ classNames(cls.root, {}, [ className ]) }>
            <Text title={ t('Обновите Ваши данные') }/>
            <Input
                value={ formData?.first }
                placeholder={ t('Ваше имя') }
                className={ cls.input }
                onChange={ onEditProfileData }
                name="first"
            />
            <Input
                value={ formData?.lastname }
                placeholder={ t('Ваша фамилия') }
                className={ cls.input }
                onChange={ onEditProfileData }
                name="lastname"
            />
            <Input
                value={ formData?.username }
                placeholder={ t('Введите имя пользователя') }
                className={ cls.input }
                onChange={ onEditProfileData }
                name="username"
            />
            <Input
                type="number"
                value={ String(formData?.age) }
                placeholder={ t('Ваш возраст') }
                className={ cls.input }
                onChange={ onEditProfileData }
                name="age"
            />
            <Input
                value={ formData?.city }
                placeholder={ t('Город') }
                className={ cls.input }
                onChange={ onEditProfileData }
                name="city"
            />
            <Input
                value={ formData?.avatar }
                placeholder={ t('Введите ссылку на аватар') }
                className={ cls.input }
                onChange={ onEditProfileData }
                name="avatar"
            />
            <CurrencySelect value={ formData?.currency } onChange={ onChangeCurrency }/>
            <CountrySelect value={ formData?.country } onChange={ onChangeCountry }/>
            <div className={ cls['btn-group'] }>
                <Button onClick={ () => onSave(formData) }>
                    {t('Сохранить')}
                </Button>
                <Button onClick={ onCanceled }>
                    {t('Отменить')}
                </Button>
            </div>
            <div className={ cls['result-block'] }>
                {isLoading && <Loader/>}
                {!!errors?.length && errors.map((err, i) => (
                    <Text key={ i } text={ err } theme={ TextTheme.ERROR }/>
                ))}
            </div>
        </form>
    );
};