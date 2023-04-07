import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'

const App = () => {
  const [number, setNumber] = useState(0)
  const [lang, setLang] = useState('React JS')
  const [show, setShow] = useState(false)

  function INCREMENT () {
    setNumber(number + 1)
  }

  function DECREMENT () {
    setNumber(number - 1)
  }

  console.log(number)

  const style = {
    display: show ? 'block' : 'none'
  }

  return (
    <>
      <Header />
      <main>
        <button
          className='btn btn-success m-5'
          onClick={() => setShow(e => !e)}
        >
          {show ? 'show' : 'hide'}
        </button>

        <div className='p-5 shadow w-75 mx-auto m-5' style={style}>
          <h1 className='text-center fs-1'>
            {number} {lang}
          </h1>

          <button
            className='btn btn-success m-5'
            onClick={() => setLang('vueJS')}
          >
            EDIT TEXT
          </button>

          <button className='btn btn-danger m-5' onClick={() => DECREMENT()}>
            DECREMENT
          </button>
          <button className='btn btn-primary m-5' onClick={() => INCREMENT()}>
            INCREMENT
          </button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
