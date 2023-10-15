import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { ReactNode } from "react";
import { IRootState } from "app/providers/StoreProvider";

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IRootState>;
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
    //const navigate = useNavigate();
    const store = createReduxStore(initialState as IRootState);

    return (
        <Provider store={ store }>
            {children}
        </Provider>
    );
};
