import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from "features/AuthByUsername/ui/LoginForm/LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

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
        <Story />
    </div>) ]
};

export const PrimaryDark: Story = {
    decorators: [ (Story) => (<div style={
        {
            maxWidth: '500px',
            padding: '20px',
            border: '1px solid'
        }
    }>
        <Story />
    </div>), ThemeDecorator(Theme.DARK) ]
};
