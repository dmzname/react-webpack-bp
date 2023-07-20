import { configureStore } from '@reduxjs/toolkit';
// Не пойму почему здесь не работает каороткий путь именно с папкой "entities" если переименовываю "_entities" или любую другую все работает...
import { counterReducer } from '_entities/Counter';
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

