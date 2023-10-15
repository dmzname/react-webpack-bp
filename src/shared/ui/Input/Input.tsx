import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect, useRef, } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    autofocus?: boolean;
    type?: string;
    name: string;
    placeholder?: string;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {

    const ref = useRef<HTMLInputElement>(null);

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        name,
        ...otherProps
    } = props;

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [ autofocus ]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <input
            ref={ ref }
            type={ type }
            name={ name }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChangeHandler }
            className={ classNames(cls.root, {}, [ className ]) }
            { ...otherProps }
        />
    );
});
