import { IRootState } from 'app/providers/StoreProvider';

export const getProfileValidateErrors = (state: IRootState) => state?.profile?.validateError;