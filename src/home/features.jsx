import passinate from '../assets/home/desktop/illustration-passionate.svg'
import resourceful from '../assets/home/desktop/illustration-resourceful.svg'
import friendly from '../assets/home/desktop/illustration-friendly.svg'


export default function Features(){
    return(
        <section className='flex justify-around items-center flex-wrap mx-auto w-[60em] max-lg:w-[45em] max-md:w-auto max-md:gap-0'>
            <div className="text-center m-4">
                <img src={passinate} alt="passinate" className="location-links-img" />
                <h2 className="text-2xl font-semibold my-6">CANADA</h2>
                <p className='w-64'>
                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                </p>
            </div>

            <div className="text-center m-4">
                <img src={resourceful} alt="resourceful" className="location-links-img" />
                <h2 className="text-2xl font-semibold my-6">AUSTRALIA</h2>
                <p className="w-64">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>

            <div className="text-center m-4">
                <img src={friendly} alt="friendly" className="location-links-img"/>
                <h2 className="text-2xl font-semibold my-6">UNITED KINGDOM</h2>
                <p className="w-64">
                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                </p>
            </div>
        </section>
    )
}