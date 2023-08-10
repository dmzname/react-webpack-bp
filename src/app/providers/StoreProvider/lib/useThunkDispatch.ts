import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IRootState } from "app/providers/StoreProvider";
import { useDispatch } from "react-redux";

export const useThunkDispatch: () => ThunkDispatch<IRootState, any, AnyAction> = useDispatch;