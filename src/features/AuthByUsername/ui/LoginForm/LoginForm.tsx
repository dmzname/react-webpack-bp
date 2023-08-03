import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

// import React, { useState } from "react";

interface LoginFormProps {
    className?: string;
}

/* interface ILoginFormState {
    username: string;
    password: string;
}

const initialState = {
    username: '',
    password: ''
}; */

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    /* const [ value, setValue ] = useState<ILoginFormState>(initialState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }; */

    return (
        <form className={ classNames(cls.root, {}, [ className ]) }>
            <Input
                autofocus
                className={ cls.input }
                placeholder={ t('Введите username') }
                // onChange={ onChangeHandler }
                name={ 'username' }
                // value={ value.username }
            />
            <Input
                className={ cls.input }
                placeholder={ t('Введите пароль') }
                // onChange={ onChangeHandler }
                name={ 'password' }
                // value={ value.password }
            />
            <Button
                theme={ ButtonTheme.OUTLINE }
                className={ cls['login-btn'] }
            >
                {t('Войти')}
            </Button>
        </form>
    );
};
