import cls from './Text.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface ITextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: ITextProps) => {
    const { title, text, theme = TextTheme.PRIMARY } = props;

    const mods = {};

    return (
        <>
            {title && <p className={ classNames(cls.title, mods, [ cls[theme] ]) }>{title}</p>}
            {text && <p className={ classNames(cls.text, mods, [ cls[theme] ]) }>{text}</p>}
        </>
    );
};