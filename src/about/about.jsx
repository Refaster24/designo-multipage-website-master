import GetInTouch from '../shared/get-in-touch'
import LocationLinks from '../shared/location-links'
import meetingImg from '../assets/about/desktop/9-Tips-to-Conduct-Productive-Business-Meetings.png'
import secoundMeetingImg from '../assets/about/desktop/images.jpg'

export default function About(){
    return(
    <main>
        <section className='bg-[#E7816B] text-white flex items-center rounded-md mx-auto w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col-reverse max-md:w-auto max-md:rounded-none'>
            <div className="basis-3/5 relative py-28 pl-12 max-lg:px-4 max-lg:py-8">

                <h1 className="text-5xl">About Us</h1>

                <p className="text-xl my-4">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>

            </div>

            <img src={meetingImg} alt="meeting image" className='w-2/5 self-stretch max-lg:w-full'/>

        </section>

        <section className='bg-[#fdf3f0] text-white flex flex-row-reverse items-center rounded-md my-24 mx-auto w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col-reverse max-md:w-auto max-md:rounded-none max-md:my-0'>
            <div className="basis-3/5 space-y-4 text-black  relative py-28 pl-12 pr-2 max-lg:px-4 max-lg:py-8">

                <h2 className="text-3xl text-[#E7816B]">World-class talent</h2>

                <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>

                <p>
                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                </p>

            </div>

            <img src={secoundMeetingImg} alt="meeting image" className='w-2/5 self-stretch max-lg:w-full max-lg:h-[22em]'/>

        </section>

        <LocationLinks/>

        <section className='bg-[#fdf3f0] text-white flex items-center rounded-md my-24 mx-auto w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col-reverse max-md:w-auto max-md:rounded-none max-md:my-0'>
            <div className="basis-3/5 space-y-4 text-black  relative py-28 pl-12 pr-2 max-lg:px-4 max-lg:py-8">

                <h2 className="text-3xl text-[#E7816B]">World-class talent</h2>

                <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>

                <p>
                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                </p>

            </div>

            <img src={secoundMeetingImg} alt="meeting image" className='w-2/5 self-stretch max-lg:w-full max-lg:h-[22em]'/>
        </section>

      <GetInTouch/>
    </main>
    )
}