import type { Preview } from '@storybook/react';
import 'app/styles/main.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { withRouter } from 'storybook-addon-react-router-v6';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        withRouter,
        ThemeDecorator(Theme.LIGHT),
    ],
};

export default preview;
