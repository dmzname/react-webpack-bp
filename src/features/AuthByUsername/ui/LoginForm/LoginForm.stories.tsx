import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from "features/AuthByUsername/ui/LoginForm/LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: 'shared/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
