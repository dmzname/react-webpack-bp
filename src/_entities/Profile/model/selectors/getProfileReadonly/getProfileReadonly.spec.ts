import { IRootState } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    it('should return is true', () => {
        const state: DeepPartial<IRootState> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as IRootState)).toBe(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getProfileReadonly(state as IRootState)).toBe(undefined);
    });
});