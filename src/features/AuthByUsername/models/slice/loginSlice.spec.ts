import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe('loginSlice.test', () => {
    it('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: '123',
        };
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('111'))).toEqual({ username: '111' });
    });

    it('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('111'))).toEqual({ password: '111' });
    });
});
