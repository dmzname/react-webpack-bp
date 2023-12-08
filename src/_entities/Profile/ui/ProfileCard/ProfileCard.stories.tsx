import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from "./ProfileCard";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "_entities/Currency";
import { Country } from "_entities/Country";
import avatar from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        profileData: {
            first: "Dmitry",
            lastname: "Zabelin",
            age: 44,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: "Odessa",
            username: "admin",
            avatar,
        }
    },
    decorators: [ StoreDecorator({}) ]
};

export const WithError: Story = {
    args: {
        profileError: 'true'
    },
    decorators: [ StoreDecorator({}) ]
};

export const ISLoading: Story = {
    args: {
        profileIsLoading: true
    },
    decorators: [ StoreDecorator({}) ]
};
