import { IRootState } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: IRootState) => state?.loginForm?.password || '';
