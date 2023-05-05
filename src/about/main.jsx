import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../shared/header'
import About from './about'
import Footer from '../shared/footer'
import '../index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <About/>
    <Footer/>
  </React.StrictMode>,
)
