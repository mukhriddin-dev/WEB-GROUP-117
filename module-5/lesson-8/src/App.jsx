import React, {useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

import {useGuard} from "./hooks/useAuthGuard";
import Layout from "./Layout/Layout";

const App = () => {
    const isAuth = useGuard();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      
        if (! isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <>
       <Layout/>
        </>
    );
};

export default App;
