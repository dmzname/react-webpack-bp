import { DeepPartial } from '@reduxjs/toolkit';
import { profileActions, profileReducer } from "./profileSlice";
import { IProfileSchema } from "../types/profile";
import { fetchProfileData } from "_entities/Profile";
import { Currency } from "_entities/Currency";
import { Country } from "_entities/Country";

const data = {
    first: "Dmitry",
    lastname: "Zabelin",
    age: 2,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: "Odessa",
    username: "admin",
};

describe('profileSlice.test', () => {
    it('test setReadonly', () => {
        const state: DeepPartial<IProfileSchema> = { readonly: false };
        expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    it('test fetchProfileData pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            error: 'error'
        };
        expect(profileReducer(state as IProfileSchema, fetchProfileData.pending('1', ''))).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    it('test fetchProfileData fulfilled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
            data: undefined
        };
        expect(profileReducer(state as IProfileSchema, fetchProfileData.fulfilled(data, '1', ''))).toEqual({
            isLoading: false,
            data
        });
    });
});
