import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername";
import { loginByUsername } from "features/AuthByUsername/models/services/loginByUsername/loginByUsername";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { getLoginState } from "../../models/selectors/getLoginState/getLoginState";
import { useThunkDispatch } from "app/providers/StoreProvider/lib/useThunkDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useThunkDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
        case 'username':
            dispatch(loginActions.setUsername(e.target.value));
            break;
        case 'password':
            dispatch(loginActions.setPassword(e.target.value));
            break;
        default:
            break;
        }
    }, [ dispatch ]);

    const onSubmitHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [ dispatch, username, password ]);

    return (
        <form className={ classNames(cls.root, {}, [ className ]) }>
            <Text title={ t('Форма авторизации') }/>
            {
                error && <Text text={ t("Ошибка, неверный имя или пароль.") } theme={ TextTheme.ERROR }/>
            }
            <Input
                autofocus
                className={ cls.input }
                placeholder={ t('Введите имя пользователя') }
                name={ 'username' }
                onChange={ onChangeData }
                value={ username }
            />
            <Input
                className={ cls.input }
                placeholder={ t('Введите пароль') }
                name={ 'password' }
                onChange={ onChangeData }
                value={ password }
            />
            <Button
                theme={ ButtonTheme.OUTLINE }
                className={ cls['login-btn'] }
                onClick={ onSubmitHandler }
                disabled={ isLoading }
            >
                {t('Войти')}
            </Button>
        </form>
    );
});
