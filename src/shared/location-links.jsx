import canda from '../assets/shared/desktop/illustration-canada.svg'
import australia from '../assets/shared/desktop/illustration-australia.svg'
import uk from '../assets/shared/desktop/illustration-united-kingdom.svg'

export default function LocationLinks() {
    return (
        <section className='flex justify-around items-center flex-wrap mx-auto w-[60em] max-lg:w-[45em] max-md:w-auto max-md:gap-0'>
            <div className="text-center m-4">
                <img src={canda} alt="canda" className="location-links-img" />
                <h2 className="text-2xl font-semibold my-6">CANADA</h2>
                <a href="../location.html">
                <button className="bg-[#E7816B] text-white px-4 py-2 rounded-md font-bold  border-2 border-[#E7816B] hover:border-black hover:bg-transparent hover:text-black">GET IN TOUCH</button>
                </a>
            </div>

            <div className="text-center m-4">
                <img src={australia} alt="australia" className="location-links-img" />
                <h2 className="text-2xl font-semibold my-6">AUSTRALIA</h2>
                <a href="../location.html">
                <button className="bg-[#E7816B] text-white px-4 py-2 rounded-md font-bold  border-2 border-[#E7816B] hover:border-black hover:bg-transparent hover:text-black">GET IN TOUCH</button>
                </a>
            </div>

            <div className="text-center m-4">
                <img src={uk} alt="uk" className="location-links-img" />
                <h2 className="text-2xl font-semibold my-6">UNITED KINGDOM</h2>
                <a href="../location.html">
                <button className="bg-[#E7816B] text-white px-4 py-2 rounded-md font-bold  border-2 border-[#E7816B] hover:border-black hover:bg-transparent hover:text-black">GET IN TOUCH</button>
                </a>
            </div>
        </section>
    )
}