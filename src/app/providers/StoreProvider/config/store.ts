import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// Не могу понять почему не срабатывает аьсолбтный путь.
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from "../../../../entities/User";
import { IRootState } from '../types/rootState';

const rootReducers: ReducersMapObject<IRootState> = {
    counter: counterReducer,
    user: userReducer
};

export function createReduxStore(initialState?: IRootState) {
    return configureStore<IRootState>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
