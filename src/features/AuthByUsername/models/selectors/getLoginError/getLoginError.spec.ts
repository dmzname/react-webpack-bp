import { IRootState } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getProfileError.test', () => {
    it('should return error', () => {
        const state: DeepPartial<IRootState> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as IRootState)).toEqual('error');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getLoginError(state as IRootState)).toEqual(undefined);
    });
});
