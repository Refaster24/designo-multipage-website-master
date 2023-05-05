import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import Header from '../shared/header'
import DesignLinks from '../shared/design-links'
import Features from './features'
import GetInTouch from '../shared/get-in-touch'
import Footer from '../shared/footer'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>

    <main id='home-main'>
      <Home />
      <DesignLinks/>
      <Features/>
      <GetInTouch/>
    </main>

    <Footer/>
  </React.StrictMode>,
)
