import { IRootState } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    it('should return is true', () => {
        const state: DeepPartial<IRootState> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as IRootState)).toBe(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getProfileIsLoading(state as IRootState)).toBe(false);
    });
});