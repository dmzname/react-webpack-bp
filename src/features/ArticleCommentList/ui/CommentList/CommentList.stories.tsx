import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from "./CommentList";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({})
    ]
};