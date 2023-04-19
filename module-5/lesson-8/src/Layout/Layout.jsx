import React from 'react';
import {useGuard} from '../hooks/useAuthGuard';
import Router from "../router";

const Layout = () => {

    const isAuth = useGuard();
    let role=1;
    

    return (
        <> {
            !isAuth ? <h1>LOGIN PAGE</h1> : <Router/>
        } </>
    );
};

export default Layout;
