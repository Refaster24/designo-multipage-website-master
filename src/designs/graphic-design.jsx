import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../shared/header'
import GetInTouch from '../shared/get-in-touch'
import Footer from '../shared/footer'
import '../index.css'

import boxed from '../assets/graphic-design/desktop/image-boxed-water.jpg'
import change from '../assets/graphic-design/desktop/image-change.jpg'
import science from '../assets/graphic-design/desktop/image-science.jpg'


function AppDesign(){
    return (
        <>
        <section id='design-section' className="bg-[#E7816B] text-center flex flex-col items-center text-white py-14 rounded-md mx-auto w-[60em] max-lg:px-4 max-lg:w-[45em] max-md:w-auto max-md:rounded-none ">
            <h1 className="text-4xl">Graphic Design</h1>
            <p className="text-xl my-2 w-8/12">
            We deliver eye-catching branding materials that are tailored to meet your business objectives.
            </p>
        </section>

        <section className="flex flex-wrap items-center justify-around gap-4 py-14 mx-auto w-[60em] max-lg:px-4 max-lg:w-[45em] max-md:w-auto">

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={science} alt="airfilter" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">AIRFILTER</h2>
                    <p className="my-3">
                    Solving the problem of poor indoor air quality by filtering the air
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={change} alt="eyecam" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">EYECAM</h2>
                    <p className="my-3">
                    Product that lets you edit your favorite photos and videos at any time
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-[#fdf3f0] rounded-md pb-2 basis-[250px] max-lg:basis-[200px] max-md:basis-2/5">
                <img src={boxed} alt="faceit" className="rounded-t-md" />
                <div className="text-center px-4">
                    <h2 className="text-[#E7816B] text-2xl my-3">FACEIT</h2>
                    <p className="my-3">
                    Get to meet your favorite internet superstar with the faceit app
                    </p>
                </div>
            </div>

        </section>

        <section>
            <div className="flex  gap-1 text-white my-12 mx-auto w-[60em] max-lg:w-[45em] max-lg:flex-col max-md:w-auto max-md:gap-0">
                <a href="../designs/web-design.html" className='block basis-1/2'>
                <div id='webDesign' className="bg-black space-y-4 py-24 grid place-items-center rounded-md max-md:rounded-none">
                    <h2 className="text-3xl">WEB DESIGN</h2>
                    <span className="text-xl after:ml-2 after:text-[#e78168]">VIEW PROJECTS</span>
                </div>
                </a>

                <a href="../designs/app-design.html" className='block basis-1/2'>
                <div id='appDesign' className="bg-black space-y-4 py-24 grid place-items-center rounded-md max-md:rounded-none">
                    <h2 className="text-3xl">APP DESIGN</h2>
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
      <AppDesign/>
      <GetInTouch/>
    </main>

    <Footer/>
  </React.StrictMode>,
)