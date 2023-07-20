import { configureStore } from '@reduxjs/toolkit';
// Не пойму почему здесь не работает каороткий путь
import { counterReducer } from '../../../../entities/Counter';
import { IRootState } from "../types/rootState";

export function createReduxStore(initialState?: IRootState) {
    return configureStore<IRootState>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
