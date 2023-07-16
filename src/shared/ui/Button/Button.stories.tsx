import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import LeftArrow from 'shared/assets/icons/angle-left-solid.svg';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const Background: Story = {
    args: {
        children: 'Click',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundSquare: Story = {
    args: {
        children: <LeftArrow />,
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

export const BackgroundSquareSizeL: Story = {
    args: {
        children: <LeftArrow />,
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L
    },
};

export const BackgroundSquareSizeXL: Story = {
    args: {
        children: <LeftArrow />,
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL
    },
};

export const Outline: Story = {
    args: {
        children: 'Click',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDarkTheme: Story = {
    args: {
        children: 'Click',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
