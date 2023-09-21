import { IRootState } from 'app/providers/StoreProvider';

export const getLoginError = (state: IRootState) => state?.loginForm?.error;
