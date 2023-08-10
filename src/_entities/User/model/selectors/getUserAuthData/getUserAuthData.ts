import { IRootState } from "app/providers/StoreProvider";

export const getUserAuthData = (state: IRootState) => state.user.authData;