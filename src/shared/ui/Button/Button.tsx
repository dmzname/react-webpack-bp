import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}

export enum ButtonSize {
    L = 'size-l',
    M = 'size-m',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        disabled,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            disabled={ disabled }
            className={ classNames(cls.root, mods, [ className, cls[theme], cls[size] ]) }
            { ...otherProps }
        >
            {children}
        </button>
    );
});
