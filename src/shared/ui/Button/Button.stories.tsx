import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Click',
    },
};

export const Clear: Story = {
    args: {
        children: 'Click',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Click',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDarkTheme: Story = {
    args: {
        children: 'Click',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
