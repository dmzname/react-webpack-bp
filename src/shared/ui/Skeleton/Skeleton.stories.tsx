import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Circle: Story = {
    args: {
        width: '130px',
        height: '130px',
        border: '100%',
    }
};

export const Squared: Story = {
    args: {
        width: '130px',
        height: '130px',
    }
};

export const CircleDark: Story = {
    args: {
        width: '130px',
        height: '130px',
        border: '100%',
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
