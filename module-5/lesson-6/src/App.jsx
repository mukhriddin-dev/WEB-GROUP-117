import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Error from "./pages/Error";
import LANG from './lang/lang';

import {context} from './context/context';

const App = () => {

    const [lang, setLang] = useState( localStorage.getItem('language') || 'uzb' );
    const [mode, setMode] = useState(localStorage.getItem('them'));



    return (
        <>
            <context.Provider value={{lang, mode, LANG} }>

                <BrowserRouter>
                    <Header setLang={setLang}
                        setMode={setMode}/>
                    <main className='h-screen'>
                        <Routes>
                            <Route path="/"
                                element={<Home/>}/>
                            <Route path="/about"
                                element={<About/>}/>
                            <Route path="/user"
                                element={<User/>}/>
                            <Route path="/contact"
                                element={<User/>}/>
                            <Route path="*"
                                element={<Error/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </BrowserRouter>
            </context.Provider>
        </>
    );
};

export default App;
