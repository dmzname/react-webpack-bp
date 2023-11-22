import { IRootState } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: IRootState) => state?.profile?.readonly;