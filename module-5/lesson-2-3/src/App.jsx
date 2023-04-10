import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Loader from './UI/Loader'

const App = () => {
  
  const [num, setNum] = useState(0)
  const [post, setPost] = useState([])
  const [load, setLoad] = useState(false)

  const fetchPost = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const result = await response.json()
      if (response.status === 200) {
        setPost(result)
        setLoad(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

  if (!load) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <main>
        <ul>
          {post?.map(post => {
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default App
