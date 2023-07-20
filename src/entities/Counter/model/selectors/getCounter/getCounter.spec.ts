import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';
import { IRootState } from "app/providers/StoreProvider";

describe('getCounter', () => {
    it('should return counter value', () => {
        const state: DeepPartial<IRootState> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as IRootState)).toEqual({ value: 10 });
    });
});
