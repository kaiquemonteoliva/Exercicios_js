import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import './pages/Home'
import Home from './pages/Home'
// import Servicos from './pages/Servicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    {/* <Servicos/> */}
  </React.StrictMode>,
)