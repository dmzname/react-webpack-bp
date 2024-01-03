import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [ StoreDecorator(
        {
            loginForm: {
                isLoading: false,
                password: '123',
                username: 'qwerty',
            }
        }
    ) ]
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
