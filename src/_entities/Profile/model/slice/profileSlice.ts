import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "_entities/Profile/model/services/updateProfileData/updateProfileData";

const initialState: IProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true;
            state.validateError = undefined;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;