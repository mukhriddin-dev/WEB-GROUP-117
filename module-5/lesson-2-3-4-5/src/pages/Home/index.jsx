import React from 'react';
import Page1 from './Page1';

const index = ({ data , msg}) => {
    
    return (
        <div className='wrap' >
            <h1>Home page</h1>
            <Page1 data={data} msg={msg} />
        </div>
    );
};

export default index;