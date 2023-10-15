import { IRootState } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (state: IRootState) => state?.profile?.isLoading || false;
