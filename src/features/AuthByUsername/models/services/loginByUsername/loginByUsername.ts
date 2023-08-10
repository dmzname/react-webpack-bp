import axios from "axios";
import { IUser, userActions } from "_entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface ILoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, {
    rejectValue: string
}>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>("http://localhost:8000/login", authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;

        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue('error');
        }
    }
);
