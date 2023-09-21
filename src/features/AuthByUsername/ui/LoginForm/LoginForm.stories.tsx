import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
    title: 'shared/LoginForm',
    component: LoginForm
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [ (Story) => (<div style={
        {
            maxWidth: '500px',
            padding: '20px',
            border: '1px solid'
        }
    }>
        <Story/>
    </div>), StoreDecorator(
        {
            loginForm: {
                password: '123',
                username: 'qwerty',
            }
        }
    ) ]
};

export const PrimaryDark: Story = {
    decorators: [ (Story) => (<div style={
        {
            maxWidth: '500px',
            padding: '20px',
            border: '1px solid'
        }
    }>
        <Story/>
    </div>), ThemeDecorator(Theme.DARK), StoreDecorator(
        {
            loginForm: {
                password: '123',
                username: 'qwerty',
            }
        }
    ) ]
};

export const FormWithErrorDark: Story = {
    decorators: [ (Story) => (<div style={
        {
            maxWidth: '500px',
            padding: '20px',
            border: '1px solid'
        }
    }>
        <Story/>
    </div>), ThemeDecorator(Theme.DARK), StoreDecorator(
        {
            loginForm: {
                password: '123',
                username: 'qwerty',
                error: 'Some error!'
            }
        }
    ) ]
};
