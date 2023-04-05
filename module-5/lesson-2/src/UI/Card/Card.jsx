import React from 'react'
import './index.scss'
const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
      <img
        src={props.img}
        alt='img'
        className='card-img'
      />
      <div className='card-body'>
              <h3 className='card-title'>{props?.title}</h3>
        <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          consectetur sit officia eligendi autem, hic est quidem qui pariatur
          quisquam voluptatem repellat eveniet suscipit quis obcaecati nisi
          dicta minima reiciendis in harum.
        </p>
      </div>
    </div>
  )
}

export default Card
