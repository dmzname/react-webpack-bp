import { IRootState } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    it('should return is value', () => {
        const state: DeepPartial<IRootState> = {
            loginForm: {
                username: 'Admin',
            },
        };
        expect(getLoginUsername(state as IRootState)).toBe('Admin');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getLoginUsername(state as IRootState)).toBe('');
    });
});
