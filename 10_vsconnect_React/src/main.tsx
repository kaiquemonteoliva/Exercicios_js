import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
// import './index.css'
// import './pages/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Servicos from './pages/Servicos'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='servicos' element={<Servicos />}/>

    </Routes>

    <Footer/>
    {/* <Servicos/> */}
    </BrowserRouter>
    </>
  </React.StrictMode>,
)
