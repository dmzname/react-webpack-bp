import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from "_entities/User";
import { IRootState } from '../types/rootState';
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";

const rootReducers: ReducersMapObject<IRootState> = {
    user: userReducer,
};

export function createReduxStore(initialState?: IRootState) {
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<IRootState>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
