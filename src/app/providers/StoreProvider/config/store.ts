import { CombinedState, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from "_entities/User";
import { IRootState } from '../types/rootState';
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { axiosInstance } from "shared/api/api";
import { Reducer } from "redux";
import { editProfileReducer } from "features/EditProfileData";
import { articleDetailsReducer } from "_entities/Article/model/slice/articleDetailsSlice";

const rootReducers: ReducersMapObject<IRootState> = {
    user: userReducer,
    editProfile: editProfileReducer,
    articleDetails: articleDetailsReducer,
};

export function createReduxStore(
    initialState?: IRootState
) {
    const reducerManager = createReducerManager(rootReducers);


    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IRootState>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: axiosInstance
                }
            }
        })
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

