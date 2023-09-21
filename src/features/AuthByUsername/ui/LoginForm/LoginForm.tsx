import React, { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { loginByUsername } from "features/AuthByUsername/models/services/loginByUsername/loginByUsername";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from "../../models/slice/loginSlice";
import { useThunkDispatch } from "app/providers/StoreProvider/lib/useThunkDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../models/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../models/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../models/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../models/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface ILoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const dispatch = useThunkDispatch();

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
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={ initialReducers }
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;