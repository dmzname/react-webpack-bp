import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";

import { Country } from "_entities/Country/model/types/country";

interface ICountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo(({ className, value, onChange }: ICountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [ onChange ]);

    return (
        <Select
            className={ classNames('', {}, [ className ]) }
            label={ t('Укажите Страну') }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
        />
    );
});