import { IRootState } from "app/providers/StoreProvider";

export const getCounter = (state: IRootState) => state.counter;
