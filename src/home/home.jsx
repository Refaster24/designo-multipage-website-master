import phone from '../assets/home/desktop/image-hero-phone.png'

function Home() {
  return (
    <section id='home' className='bg-[#E7816B] text-white relative overflow-hidden flex items-center py-28 pl-12 rounded-md mx-auto w-[60em] max-lg:px-4 max-lg:pb-[24em] max-lg:pt-20 max-lg:text-center max-lg:w-[45em] max-lg:flex-col max-md:w-auto max-md:rounded-none max-md:pb-72'>
      <div className="basis-3/5 relative">

        <h1 className="text-4xl">Award-winning custom designs and digital branding solutions</h1>

        <p className="text-xl my-4">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

        <a href="../contact.html">
          <button className="bg-white text-[#1d1c1e] px-4 py-2 rounded-md font-bold border-white border-2 hover:bg-transparent hover:text-white">LEARN MORE</button>
        </a>
      </div>
      <img src={phone} alt="phone" className='w-1/2 absolute translate-x-[30em] translate-y-4 max-lg:translate-x-0 max-lg:translate-y-[12.5em] max-md:translate-y-[0em] max-md:-bottom-20 max-md:w-[280px]'/>

    </section>
  )
}

export default Home