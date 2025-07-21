import {  Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/Header"
import { Shop } from "./components/Shop/Shop"
import { Footer } from "./components/Footer/Footer"
function App() {

  return (
    <>
      <Header/>
      <Routes>       
        <Route path="/" element={<Shop/>}/>
      </Routes>
      <img src="wsp.webp" id="wsp"/>
      <Footer/>
    </>
  )
}

export default App
