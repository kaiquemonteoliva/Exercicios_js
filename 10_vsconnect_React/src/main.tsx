import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Header'
// import App from './App'
// import './index.css'
// import './pages/Home'
import Home from './pages/Home'
// import Servicos from './pages/Servicos'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Footer/>
    {/* <Servicos/> */}
  </React.StrictMode>,
)
