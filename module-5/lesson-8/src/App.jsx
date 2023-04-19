import React, {useEffect, memo, useState} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

import {useGuard} from "./hooks/useAuthGuard";
import Layout from "./Layout/Layout";

const App = () => {
  const [num,setNum]=useState(0);
console.log("render app")
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
       <button onClick={()=>setNum(num+1)}>ADD {num}</button>
        </>
    );
};

export default memo(App);
