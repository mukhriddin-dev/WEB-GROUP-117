import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Card from './UI/Card/Card'

const App = () => {
  function card (props) {
    console.log(props.title)
    console.log(props.text)
    console.log(props.id)
  }

  card({ title: 'reactjs', text: 'lorem ipsum dolor', id: 1 })
  card({ title: 'vuejs', text: 'lorem ipsum dolor', id: 1 })
  card({ title: 'nextjs', text: 'lorem ipsum dolor', id: 1 })

  return (
    <>
      <Header />
      <main>
        <div className='wrapper'>
          <Card title='React js' img='https://picsum.photos/id/32/300/240' />
          <Card title='Vue js' img='https://picsum.photos/id/33/300/240' />
          <Card title='Angular js' img='https://picsum.photos/id/34/300/240' />
          <Card title='Next js' img='https://picsum.photos/id/37/300/240' />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
