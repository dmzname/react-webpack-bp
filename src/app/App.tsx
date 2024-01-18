import { RouterProvider } from 'react-router-dom';
import { router } from "./providers/routes/routes";
import { userActions } from "_entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const App = () => {
    const dispatch = useAppDispatch();
    const result = dispatch(userActions.initAuthData());

    return (
        result ? <RouterProvider router={ router }/> : null
    );
};

export default App;