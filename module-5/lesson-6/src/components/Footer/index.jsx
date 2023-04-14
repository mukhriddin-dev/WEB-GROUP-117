import React, { useContext } from 'react';
import { context } from '../../context/context';

const index = () => {
    
    const {mode}=useContext(context);

    const footerStyle = {
        backgroundColor: mode==='LIGHT' ? "green" : "black",
        color: mode==='LIGHT' ? "black" : "white"
    }

    return (
        <footer style={footerStyle} className='bg-green-700 text-center '>

            <div className="container p-4 mx-auto">

                <h4 className='text-xl text-center'>{new Date().getFullYear()}</h4>

            </div>

        </footer>
    );
};

export default index;
