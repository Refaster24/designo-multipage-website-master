import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../shared/header'
import CountactUs from './contact'
import LocationLinks from '../shared/location-links'
import Footer from '../shared/footer'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>

    <main className='mb-12'>
      <CountactUs />
      <LocationLinks/>
    </main>

    <Footer/>
  </React.StrictMode>,
)
