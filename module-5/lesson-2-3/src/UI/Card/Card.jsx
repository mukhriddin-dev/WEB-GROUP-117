import React from 'react'
import './index.scss'
const Card = props => {
  const {
    item: { email, first_name, last_name, avatar }
  } = props

  return (
    <div className='card'>
      <img src={avatar} alt='img' className='card-img' />
      <div className='card-body'>
        <h3 className='card-title'>
          {first_name} {last_name}
        </h3>
        <p className='card-text'>{email}</p>
      </div>
    </div>
  )
}

export default Card
