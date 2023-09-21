import { IRootState } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: IRootState) => state?.loginForm?.username || '';
