import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../shared/header'
import GetInTouch from '../shared/get-in-touch'
import Footer from '../shared/footer'
import '../index.css'

import bloger from '../assets/web-design/desktop/image-blogr.jpg'
import builder from '../assets/web-design/desktop/image-builder.jpg'
import camp from '../assets/web-design/desktop/image-camp.jpg'
import express from '../assets/web-design/desktop/image-express.jpg'
import photon from '../assets/web-design/desktop/image-photon.jpg'
import transfer from '../assets/web-design/desktop/image-transfer.jpg'


function WebDesign(){
    return (
        <>
        <section id='design-section' className="bg-[#E7816B] text-center flex flex-col items-center text-white py-14 rounded-md mx-auto w-[60em] max-lg:px-4 max-lg:w-[45em] max-md:w-auto max-md:rounded-none ">
            <h1 className="text-4xl">Web Design</h1>
            <p className="text-xl my-2 w-8/12">
                We build websites that serve as powerful marketing tools and bring memorable brand experiences.
            </p>
        </section>

        <section className="flex flex-wrap items-center justify-around gap-4 py-14 mx-auto w-[60em] max-lg:px-4 max-lg:w-[45em] max-md:w-auto">

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={express} alt="express" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">EXPRESS</h2>
                    <p className="my-3">
                    A multi-carrier shipping website ecommerce businesses
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={transfer} alt="transfer" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">TRANSFER</h2>
                    <p className="my-3">
                    Site for low-cost money transfers and sending money within seconds
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={photon} alt="photon" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">PHOTON</h2>
                    <p className="my-3">
                    A state-of-the-art music player with high-resolution audio and DSP effects
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={builder} alt="builder" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">BUILDER</h2>
                    <p className="my-3">
                    Connects users with local contractors based on their location
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={bloger} alt="bloger" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">bloger</h2>
                    <p className="my-3">
                        Blogr is a platform for creating an online blog or publication
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={camp} alt="camp" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">CAMP</h2>
                    <p className="my-3">
                    Get expert training in coding, data,design, and digital marketing
                    </p>
                </div>
            </div>
        </section>

        <section>
            <div className="flex  gap-1 text-white my-12 mx-auto w-[60em] max-lg:w-[45em] max-lg:flex-col max-md:w-auto max-md:gap-0">
                <a href="../designs/app-design.html" className='block basis-1/2'>
                <div id='appDesign' className="bg-black space-y-4 py-24 grid place-items-center rounded-md max-md:rounded-none">
                    <h2 className="text-3xl">APP DESIGN</h2>
                    <span className="text-xl after:ml-2 after:text-[#e78168]">VIEW PROJECTS</span>
                </div>
                </a>

                <a href="../designs/graphic-design.html" className='block basis-1/2'>
                <div id='graphicDesign' className="bg-black space-y-4 py-24 grid place-items-center rounded-md max-md:rounded-none">
                    <h2 className="text-3xl">GRAPHIC DESIGN</h2>
                    <span className="text-xl after:ml-2 after:text-[#e78168]">VIEW PROJECTS</span>
                </div>
                </a>
            </div>
        </section>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>

    <main>
      <WebDesign/>
      <GetInTouch/>
    </main>

    <Footer/>
  </React.StrictMode>,
)