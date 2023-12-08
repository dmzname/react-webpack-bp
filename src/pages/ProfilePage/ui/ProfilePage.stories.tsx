import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ProfileCard } from "_entities/Profile";
import { Currency } from "_entities/Currency";
import { Country } from "_entities/Country";
import avatar from "shared/assets/tests/storybook.jpg";

const profileData = {
    first: "Dmitry",
    lastname: "Zabelin",
    age: 44,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: "Odessa",
    username: "admin",
    avatar,
};

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [ StoreDecorator({
        user: {
            authData: {
                username: 'Dmitry',
                id: '1'
            }
        }
    }) ],
    render: () => (
        <div className={ 'page-wrapper' }>
            <ProfileCard
                profileData={ profileData }
            />
        </div>
    )
};
export const Dark: Story = {
    decorators: [ ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: {
                username: 'Dmitry',
                id: '1'
            }
        }
    }) ],
    render: () => (
        <div className={ 'page-wrapper' }>
            <ProfileCard
                profileData={ profileData }
            />
        </div>
    )
};
