import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '_entities/Counter';
import { userReducer } from "_entities/User";
import { IRootState } from '../types/rootState';
import { loginReducer } from "features/AuthByUsername";

const rootReducers: ReducersMapObject<IRootState> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
};

export function createReduxStore(initialState?: IRootState) {
    return configureStore<IRootState>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
