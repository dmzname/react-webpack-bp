import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from "shared/ui/Select/Select";
import { Currency } from "_entities/Currency";
import { memo, useCallback } from "react";

interface ICurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    name?: string;
}

const options = [
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.EUR, content: Currency.EUR }
];

export const CurrencySelect = memo(({ className, value, onChange, name }: ICurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [ onChange ]);

    return (
        <Select
            className={ classNames('', {}, [ className ]) }
            label={ t('Укажите Валюту') }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
        />
    );
});