import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {context} from '../../context/context';

const index = ({setMode, setLang}) => {

    const {mode, LANG , lang} = useContext(context);




    const t=LANG[lang.toLowerCase()];

    console.log(t)
  


    const headerStyle = {
        backgroundColor: mode==='LIGHT' ? "green" : "black",
        color: mode==='LIGHT' ? "black" : "white"
    }

    

    console.log(headerStyle)


    return (
        <header className='bg-green-600' style={headerStyle}>
            <div className="container mx-auto">
                <nav className="nav flex  justify-between h-[70px] items-center">

                    <a href="#" className="logo font-bold text-2xl">REACT APP</a>


                    <ul className="list flex justify-between w-1/3 uppercase">
                        <li className="item">
                            <NavLink to="/" className="link">{t.home}</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/about" className="link">{t.about}</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/user" className="link">{t.user}</NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/contact" className="link">{t.contact}</NavLink>
                        </li>
                    </ul>

                    <div className="select flex">

                        <select className='p-3 text-white bg-slate-700 border border-sky-400 focus:ring-2 mx-3 rounded-3xl'
                            onChange={(e) => { 
                                setMode(e.target.value)
                                localStorage.setItem('them', e.target.value)
                            }}>
                            <option disabled selected>{t.selectmode}</option>
                            <option>LIGHT</option>
                            <option>DARK</option>
                        </select>

                        <select onChange={(e)=>{
                            setLang(e.target.value)
                            localStorage.setItem('language', e.target.value)
                        }} className='p-3 text-white bg-slate-700 border border-sky-400 focus:ring-2 mx-3 rounded-3xl'>
                            <option disabled selected>{t.selectlanguage}</option>
                            <option>UZB</option>
                            <option>ENG</option>
                        </select>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default index;
