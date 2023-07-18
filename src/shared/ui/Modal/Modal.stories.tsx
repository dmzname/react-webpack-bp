import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda commodi distinctio doloribus eos et eum, incidunt inventore iste mollitia nihil placeat saepe sequi veniam vitae voluptatem, voluptatibus. Iste, quos.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda commodi distinctio doloribus eos et eum, incidunt inventore iste mollitia nihil placeat saepe sequi veniam vitae voluptatem, voluptatibus. Iste, quos.',
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};