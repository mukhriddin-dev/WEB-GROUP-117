import React from 'react'
import { user } from '../../constants/user'
import Card from "../../UI/Card/Card";

const index = () => {
  

  if (!user.length) {
    return <h1>NOT FOUND USER !</h1>
  }

  return (
    <div className='wrapper'>
      {user.length > 0 ? (
        user?.map(item => {
          return <Card key={item.id} item={item} />
        })
      ) : (
        <h1>NOT FOUND USER</h1>
      )}
    </div>
  )
}

export default index
