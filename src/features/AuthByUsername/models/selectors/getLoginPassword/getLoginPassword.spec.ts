import { DeepPartial } from '@reduxjs/toolkit';
import { IRootState } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    it('should return is value', () => {
        const state: DeepPartial<IRootState> = {
            loginForm: {
                password: '111',
            },
        };
        expect(getLoginPassword(state as IRootState)).toBe('111');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getLoginPassword(state as IRootState)).toBe('');
    });
});
