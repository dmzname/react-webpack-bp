import { AnyAction, combineReducers, Reducer } from "redux";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { IRootState, RootStateKey } from "../types/rootState";
import { IReducerManager } from "../types/reducerManager";

export function createReducerManager(initialReducers: ReducersMapObject<IRootState>): IReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: RootStateKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: IRootState, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: RootStateKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: RootStateKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        }
    };
}