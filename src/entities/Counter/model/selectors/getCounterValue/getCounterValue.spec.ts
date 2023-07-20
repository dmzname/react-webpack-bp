import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { IRootState } from "app/providers/StoreProvider";

describe('getCounterValue.spec', () => {
    it('should return counter value', () => {
        const state: DeepPartial<IRootState> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as IRootState)).toEqual(10);
    });
});
