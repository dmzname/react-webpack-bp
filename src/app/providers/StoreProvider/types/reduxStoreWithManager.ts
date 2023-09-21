import { EnhancedStore } from "@reduxjs/toolkit";
import { IRootState } from "./rootState";
import { IReducerManager } from "./reducerManager";

export interface IReduxStoreWithManager extends EnhancedStore<IRootState> {
    reducerManager: IReducerManager;
}