import { IRootState } from 'app/providers/StoreProvider';

export const getProfileData = (state: IRootState) => state?.profile?.data || '';