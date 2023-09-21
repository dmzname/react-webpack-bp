import { CombinedState, ReducersMapObject } from "@reduxjs/toolkit";
import { IRootState, RootStateKey } from "./rootState";
import { AnyAction, Reducer } from "redux";

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IRootState>;
    reduce: (state: IRootState, action: AnyAction) => CombinedState<IRootState>;
    add: (key: RootStateKey, reducer: Reducer) => void;
    remove: (key: RootStateKey) => void;
}