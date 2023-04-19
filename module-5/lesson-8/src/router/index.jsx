import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Dashboard";
import Login from "../pages/Auth";
import Extra from "../pages/Extra";
const index = () => {
    return (
        <>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/login"
                    element={<Login/>}/>
                <Route path="/extra"
                    element={<Extra/>}/>
                <Route path="*"
                    element={
                        <h1>404 NOT FOUND</h1>
                    }/>
            </Routes>
        </>
    );
};

export default index;
