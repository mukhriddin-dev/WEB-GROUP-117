import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {Logout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const index = () => {

    const navigate=useNavigate();

    console.log("re render dashboard")
    return (
        <div className='w-75 p-5 shadow mx-auto m-5'>
            <Link to="/extra">EXTRA PAGE</Link>
            <h1>Dashboard</h1>
            <button className='btn btn-success' onClick={()=>Logout(navigate)}>logout</button>
        </div>
    );
};

export default memo(index);