import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from "./ArticleDetailsPage";

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'entities/ArticleDetailsPage',
    component: ArticleDetailsPage,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {};