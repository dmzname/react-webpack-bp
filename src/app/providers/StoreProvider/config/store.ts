import { configureStore } from '@reduxjs/toolkit';
import { IRootState } from "../types/rootState";
import { counterReducer } from "entities/Counter";

export function createReduxStore(initialState?: IRootState) {
    return configureStore({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

