import { useState ,useEffect} from 'react'
import logo from '../assets/shared/desktop/logo-dark.png'
import close from '../assets/shared/mobile/icon-close.svg'
import hamburger from'../assets/shared/mobile/icon-hamburger.svg'

function Header() {
    const [windowWidth,setWindowWidth] =useState(window.innerWidth)
    const [state,setState] = useState(true)

    function rotate(){
      setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener('resize',rotate)
    },[])

    const links =(
      <>
      <li className="hover:underline"><a href="../about.html">OUR COMPANY</a></li>
      <li className="hover:underline"><a href="../location.html">LOCATIONS</a></li>
      <li className="hover:underline"><a href="../contact.html">CONTACT</a></li>
      </>
    )

    let ulDisplay
    let buttonDisplay =  'none'
    let icone = hamburger
    let mobileNav= 'none'

    if(windowWidth <= 768){
        ulDisplay = 'none'
        buttonDisplay = 'block'
        if(state === false){
            icone = close
            mobileNav = 'block'
        }
    }

  return (
    <>
      <header className="flex items-center justify-between my-10 mx-auto w-[60em] max-lg:w-[45em] max-md:w-auto max-md:px-6">
          <a href="../index.html">
            <img src={logo} alt="logo" className="w-56" />
          </a>
          <nav className='flex items-center'>
              <ul style={{display:ulDisplay}} className="flex gap-8 text-lg text-black">
                {links}
              </ul>
              <button onClick={()=>setState(!state)} style={{display:buttonDisplay}}>
                  <img src={icone} alt="button nav" />
              </button>
          </nav>
      </header>
      <div style={{display:mobileNav}} className="bg-[#1d1c1e] py-6 pl-8">
        <ul className="flex flex-col gap-5 text-lg text-white">
                {links}
              </ul>
      </div>
    </>
  )
}

export default Header