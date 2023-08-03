import type { Meta, StoryObj } from '@storybook/react';
import { Input } from "shared/ui/Input/Input";

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

export const PrimaryWithValue: Story = {
    args: {
        value: 'John Doe',
    }
};

export const PrimaryWithPlaceholder: Story = {
    args: {
        placeholder: 'Write your Name!'
    }
};
