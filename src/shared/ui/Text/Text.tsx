import cls from './Text.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

interface ITextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    titleStyles?: string;
    textStyles?: string;
    titleTag?: React.ElementType;
    textTag?: React.ElementType;
}

export const Text = memo((props: ITextProps) => {
    const {
        titleStyles,
        textStyles,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        titleTag: TitleTag = 'h3',
        textTag: TextTag = 'p'
    } = props;

    return (
        <>
            {title && <TitleTag className={ classNames(cls.title, {}, [ titleStyles, cls[theme], cls[align] ]) }>
                {title}
            </TitleTag>}
            {text && <TextTag className={ classNames(cls.text, {}, [ textStyles, cls[theme], cls[align] ]) }>
                {text}
            </TextTag>}
        </>
    );
});