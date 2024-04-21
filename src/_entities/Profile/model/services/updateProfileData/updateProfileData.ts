import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRootState, IThunkExtraArg } from "app/providers/StoreProvider";
import { IProfile } from "_entities/Profile";
import { ValidateProfileError } from "_entities/Profile/model/types/profile";

export const updateProfileData = createAsyncThunk<IProfile, IProfile, {
    rejectValue: ValidateProfileError[],
    extra: IThunkExtraArg
    state: IRootState
}>(
    "profile/updateProfileData",
    async (formData, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {

            const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;

        } catch (err) {
            return rejectWithValue([ ValidateProfileError.SERVER_ERROR ]);
        }
    }
);