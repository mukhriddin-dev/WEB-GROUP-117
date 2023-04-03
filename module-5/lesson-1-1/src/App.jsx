import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/MainApp'
import img1 from "./assets/images/wallpapper.jpg";

const App = () => {
  return (
    <>
      <img src={img1} alt="rasm" />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
