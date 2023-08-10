import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from "shared/ui/Text/Text";

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "Some Title",
        text: "Some description"
    },
};

export const ErrorText: Story = {
    args: {
        title: "Some Title",
        text: "Some description",
        theme: TextTheme.ERROR
    },
};