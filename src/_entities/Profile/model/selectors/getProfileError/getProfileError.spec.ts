import { IRootState } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    it('should return error', () => {
        const state: DeepPartial<IRootState> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as IRootState)).toEqual('error');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getProfileError(state as IRootState)).toEqual(undefined);
    });
});
