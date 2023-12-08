import { IRootState } from 'app/providers/StoreProvider';

export const getProfileFormData = (state: IRootState) => state?.editProfile?.form;