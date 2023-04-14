import React from 'react'
import Page2 from './Page2'
import Extra from './Extra'

const Page1 = ({ data , msg }) => {
  return (
    <div className='wrap2'>
      <h1>Page 1</h1>
          <Page2 data={data} msg={msg} />
          <Extra/>
    </div>
  )
}

export default Page1
