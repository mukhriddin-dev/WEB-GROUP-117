import React, { useState, useEffect } from 'react'
import Loader from '../../UI/Loader'
import axios from 'axios'

const index = () => {
  const [num, setNum] = useState(0)
  const [post, setPost] = useState([])
  const [load, setLoad] = useState(false)

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      if (response.status === 200) {
        setPost(response.data)
        setLoad(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <ul>
        {load ? (
          post?.map(post => {
            return <li key={post.id}>{post.title}</li>
          })
        ) : (
          <Loader />
        )}
      </ul>
    </>
  )
}

export default index
