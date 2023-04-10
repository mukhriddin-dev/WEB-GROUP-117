import React, { useState, useRef } from 'react'

const index = () => {
  const [number, setNumber] = useState(0)
  const [lang, setLang] = useState('React JS')
  const [show, setShow] = useState(false)

  const cardRef = useRef('ok')
  const inputRef = useRef('')

  console.log(cardRef)

  function INCREMENT () {
    setNumber(number + 1)
    cardRef.current.classList.toggle('swipe')
    cardRef.current.setAttribute('id', 'class-id')
    console.log(cardRef)
  }

  function DECREMENT () {
    setNumber(number - 1)
  }

  function INPUT_VALUE () {
    // console.log(inputRef.current.value)
    inputRef.current.focus()
    inputRef.current.style.display = 'none'
  }

  console.log(number)

  const style = {
    display: show ? 'block' : 'none'
  }

  return (
    <div>
      <input
        type='text'
        className='form-control'
        placeholder='Enter username'
        ref={inputRef}
      />

      <button className='btn btn-success m-5' onClick={() => INPUT_VALUE()}>
        INPT VALUE OR FOCUS INPUT
      </button>

      <button className='btn btn-success m-5' onClick={() => setShow(e => !e)}>
        {show ? 'show' : 'hide'}
      </button>

      <div className={`p-5 shadow cards w-75 mx-auto m-5`} ref={cardRef}>
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
    </div>
  )
}

export default index
