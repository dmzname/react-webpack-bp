import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from "react";

export interface ISelectOptions {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: ISelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = memo((props: ISelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange
    } = props;

    const optionsList = useMemo(() => options?.map(opt => (
        <option
            className={ cls.option }
            value={ opt.value }
            key={ opt.value }
        >
            {opt.content}
        </option>
    )), [ options ]);

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={ classNames(cls.root, mods, [ className ]) }>
            {
                label && (
                    <span className={ cls.label }>
                        {label}
                    </span>
                )
            }
            <select
                className={ cls.select }
                value={ value }
                onChange={ onChangeHandler }
            >
                {optionsList}
            </select>
        </div>
    );
});