import React from 'react'
import List from './List'
import "./index.scss";

const index = () => {
  return (
    <footer>
      <div className='container'>
        <div className='wrapper'>
          <List /> <List /> <List />
        </div>
      </div>
    </footer>
  )
}

export default index
