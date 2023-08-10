import { ICounterSchema } from '_entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.spec', () => {
    it('decrement', () => {
        const state: ICounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    it('increment', () => {
        const state: ICounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    it('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
