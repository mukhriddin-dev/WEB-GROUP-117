import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Posts from './pages/Posts'
import Todos from './pages/Todo'
import Users from './pages/Users'
import Lesson3 from './pages/Lesson3'
import Error from './pages/Error/Error'
import Home from './pages/Home'
import { context } from './context/context'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [data, setData] = useState('React.JS in Context API')
  const text = "app";
  const message = text => {
    console.log(text)
  }

  return (
    <>
      <context.Provider value={{data,text}}>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home data={data} msg={message} />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/users' element={<Users />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </context.Provider>
    </>
  )
}

export default App
