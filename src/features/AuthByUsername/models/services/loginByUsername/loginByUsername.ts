import { IUser, userActions } from "_entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { IThunkExtraArg } from "app/providers/StoreProvider";

export interface ILoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, {
    rejectValue: string,
    extra: IThunkExtraArg
}>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {

            const response = await extra.api.post<IUser>("/login", authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;

        } catch (err) {
            return rejectWithValue('error');
        }
    }
);
