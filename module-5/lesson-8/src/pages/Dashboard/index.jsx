import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    console.log("re render dashboard")
    return (
        <div className='w-75 p-5 shadow mx-auto m-5'>
            <Link to="/extra">EXTRA PAGE</Link>
            <h1>Dashboard</h1>

        </div>
    );
};

export default memo(index);