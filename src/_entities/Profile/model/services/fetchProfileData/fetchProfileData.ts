import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkExtraArg } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<IProfile, string, {
    rejectValue: string,
    extra: IThunkExtraArg
}>(
    "profile/fetchProfileData",
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {

            const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;

        } catch (err) {
            return rejectWithValue('error');
        }
    }
);