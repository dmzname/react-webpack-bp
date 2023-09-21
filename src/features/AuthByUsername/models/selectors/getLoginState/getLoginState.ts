import { IRootState } from "app/providers/StoreProvider";

export const getLoginState = (state: IRootState) => state?.loginForm;