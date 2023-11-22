import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Edit from 'shared/assets/icons/pen-solid.svg';
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { getProfileReadonly, IProfile, profileActions } from "_entities/Profile";
import { Loader } from "shared/ui/Loader";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ProfileEditModal } from '_entities/Profile/ui/ProfileEditModal/ProfileEditModal';

interface IProfileCardProps {
    className?: string;
    profileData?: IProfile;
    profileError?: string;
    profileIsLoading?: boolean;
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className,
        profileData,
        profileError,
        profileIsLoading,
    } = props;
    const { t } = useTranslation('profile');
    const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        setIsEditModalOpen(true);
        dispatch(profileActions.setReadonly(false));
    }, [ dispatch ]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [ dispatch ]);

    if (profileIsLoading) {
        return (
            <div className={ classNames(cls.root, {}, [ className, cls['is-loading'] ]) }>
                <Loader/>
            </div>
        );
    }

    if (profileError) {
        return (
            <div className={ classNames(cls.root, {}, [ className, cls['is-error'] ]) }>
                <Text
                    title={ t('Ошибка при загрузке') }
                    titleTag={ 'h3' }
                    text={ t('Перезагрузите страницу') }
                    theme={ TextTheme.ERROR }
                    titleStyles={ cls['is-error-title'] }
                    align={ TextAlign.CENTER }
                />
            </div>
        );
    }

    if (profileData) {
        return (
            <div className={ classNames(cls.root, {}, [ className ]) }>
                <div className={ cls.avatar }>
                    <img src={ profileData.avatar } alt={ t('Аватар') }/>
                    <Button className={ cls['avatar-edit-button'] }>
                        <Edit/>
                    </Button>
                </div>
                <div className={ cls.info }>
                    <Text text={ profileData.first + ' ' + profileData.lastname } textStyles={ cls['info-fullname'] }/>
                    <Text text={ '@' + profileData.username } textStyles={ cls['info-username'] }/>
                    <p className={ cls['info-more'] }>
                        <Text text={ t('Возраст') + ':' } textTag={ 'span' }/>
                        <Text text={ String(profileData.age) } textTag={ 'span' }/>
                    </p>
                    <p className={ cls['info-more'] }>
                        <Text text={ t('Страна') + ':' } textTag={ 'span' }/>
                        <Text text={ String(profileData.country) } textTag={ 'span' }/>
                    </p>
                    <p className={ cls['info-more'] }>
                        <Text text={ t('Город') + ':' } textTag={ 'span' }/>
                        <Text text={ String(profileData.city) } textTag={ 'span' }/>
                    </p>
                    <p className={ cls['info-more'] }>
                        <Text text={ t('Валюта') + ':' } textTag={ 'span' }/>
                        <Text text={ String(profileData.currency) } textTag={ 'span' }/>
                    </p>

                    <Button
                        theme={ ButtonTheme.BACKGROUND }
                        className={ cls['edit-info-btn'] }
                        onClick={ onEdit }
                    >
                        {t('Редактировать')}
                    </Button>
                    <ProfileEditModal isOpen={ isEditModalOpen } onClose={ () => setIsEditModalOpen(false) }/>
                </div>
            </div>
        );
    }
};                