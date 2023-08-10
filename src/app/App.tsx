import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./providers/routes/routes";
import { useDispatch } from "react-redux";
import { userActions } from "_entities/User";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [ dispatch ]);


    return (
        <Suspense fallback="">
            <RouterProvider router={ router }/>
        </Suspense>
    );
};

export default App;