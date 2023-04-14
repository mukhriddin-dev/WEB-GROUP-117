import React,{useContext} from 'react';
import { context } from '../../context/context';

const Page2 = ({ msg }) => {

    const {data, text} = useContext(context);

    console.log(data)
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='wrap3'>
            <h1>Page 3 --  {text} </h1>
            
            <button onClick={()=>msg(arr)} >SEND MESSAGE</button>
        </div>
    );
};

export default Page2;