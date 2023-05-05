import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../shared/header'
import Location from './location'
import Footer from '../shared/footer'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Location/>
    <Footer/>
  </React.StrictMode>,
)