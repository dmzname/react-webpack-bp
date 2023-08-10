import { StoryFn } from '@storybook/react';
import { IRootState, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<IRootState>) => (Story: StoryFn) => {
    return (
        <StoreProvider initialState={ state }>
            <Story/>
        </StoreProvider>
    );
};
