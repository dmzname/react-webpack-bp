import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { ReactNode } from "react";
import { DeepPartial } from "@reduxjs/toolkit";
import { IRootState } from "app/providers/StoreProvider";

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IRootState>;
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
    const store = createReduxStore(initialState as IRootState);

    return (
        <Provider store={ store }>
            {children}
        </Provider>
    );
};
