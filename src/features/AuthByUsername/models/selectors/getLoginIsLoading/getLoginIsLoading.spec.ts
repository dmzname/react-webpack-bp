import { DeepPartial } from '@reduxjs/toolkit';
import { IRootState } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    it('should return is true', () => {
        const state: DeepPartial<IRootState> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as IRootState)).toBe(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getLoginIsLoading(state as IRootState)).toBe(false);
    });
});
