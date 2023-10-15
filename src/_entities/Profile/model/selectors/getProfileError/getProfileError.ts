import { IRootState } from 'app/providers/StoreProvider';

export const getProfileError = (state: IRootState) => state?.profile?.error;
