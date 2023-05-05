import { useState ,useEffect} from 'react'

import GetInTouch from '../shared/get-in-touch'

import canadaDesktop from '../assets/locations/desktop/image-map-canada.png'
import australiaDesktop from '../assets/locations/desktop/image-map-australia.png'
import ukDesktop from '../assets/locations/desktop/image-map-united-kingdom.png'

import canadaTablet from '../assets/locations/tablet/image-map-canada.png'
import australiaTablet from '../assets/locations/tablet/image-map-australia.png'
import ukTablet from '../assets/locations/tablet/image-map-uk.png'

export default function Location(){

    const [windowWidth,setWindowWidth] =useState(window.innerWidth)

    function rotate(){
      setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener('resize',rotate)
    },[])


    let canada = canadaDesktop
    let australia = australiaDesktop
    let uk = ukDesktop

    if(windowWidth <= 1024){
        canada = canadaTablet
        australia = australiaTablet
        uk = ukTablet
    }


    return(
        <main>
            <h1 className='hidden absolute'>location</h1>
            <section className="flex items-center gap-4  mx-auto my-4 w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col-reverse max-md:w-auto">
                <div className='bg-[#fdf3f0] basis-2/3 self-stretch pl-12 py-20 rounded-md max-md:rounded-none max-lg:pl-0'>
                    <h2 className="text-[#E7816B] text-4xl font-bold mb-4">Canada</h2>
                    <div className="flex flex-wrap gap-8 text-start max-lg:justify-center max-lg:text-center">
                        <div>
                            <h3 className="font-bold">Designo Central Office</h3>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Contact</h3>
                            <p className="">P : +1 253-863-8967</p>
                            <p className="">M : contact@designo.com</p>
                        </div>
                    </div>
                </div>
                <img src={canada} alt="canada" className='basis-1/3 rounded-md max-md:rounded-none'/>
            </section>

            <section className="flex flex-row-reverse items-center gap-4  mx-auto my-4 w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col-reverse max-md:w-auto">
                <div className='bg-[#fdf3f0] basis-2/3 self-stretch pl-12 py-20 rounded-md max-md:rounded-none max-lg:pl-0'>
                    <h2 className="text-[#E7816B] text-4xl font-bold mb-4">australia</h2>
                    <div className="flex flex-wrap gap-8 text-start max-lg:justify-center max-lg:text-center">
                        <div>
                            <h3 className="font-bold">Designo Central Office</h3>
                            <p>19 Balonne Street</p>
                            <p>New South Wales 2443</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Contact</h3>
                            <p className="">P : (02) 6720 9092</p>
                            <p className="">M : contact@designo.au</p>
                        </div>
                    </div>
                </div>
                <img src={australia} alt="australia" className='basis-1/3 rounded-md max-md:rounded-none'/>
            </section>

            <section id='uk' className="flex items-center gap-4  mx-auto my-4 w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col-reverse max-md:w-auto">
                <div className='bg-[#fdf3f0] basis-2/3 self-stretch pl-12 py-20 rounded-md max-md:rounded-none max-lg:pl-0'>
                    <h2 className="text-[#E7816B] text-4xl font-bold mb-4">United kingdom</h2>
                    <div className="flex flex-wrap gap-8 text-start max-lg:justify-center max-lg:text-center">
                        <div>
                            <h3 className="font-bold">Designo Central Office</h3>
                            <p>13 Colorado Way</p>
                            <p>Rhyd-y-fro SA8 9GA</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Contact</h3>
                            <p className="">P : 078 3115 1400</p>
                            <p className="">M : contact@designo.uk</p>
                        </div>
                    </div>
                </div>
                <img src={uk} alt="United kingdom" className='basis-1/3 rounded-md max-md:rounded-none'/>
            </section>


<GetInTouch/>
        </main>
    )
}