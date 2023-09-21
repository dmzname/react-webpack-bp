import { IRootState } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: IRootState) => state?.loginForm?.isLoading || false;
