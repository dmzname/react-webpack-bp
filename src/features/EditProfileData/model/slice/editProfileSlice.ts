import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from "_entities/Profile";
import { IProfileData } from "../types/profileData";

const initialState: IProfileData = {};

export const editProfileSlice = createSlice({
    name: 'editProfile',
    initialState,
    reducers: {
        initProfile: (state, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
            state.form = action.payload;
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.validateError = undefined;
        }
    }
});

export const { actions: editProfileActions } = editProfileSlice;
export const { reducer: editProfileReducer } = editProfileSlice;