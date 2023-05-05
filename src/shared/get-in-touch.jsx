export default function GetInTouch(){

    return (
        <section className='bg-[#da6950] text-white relative top-24 flex items-center space-y-4 py-8 px-12 rounded-md mx-auto w-[60em] max-lg:text-center  max-lg:w-[45em] max-lg:flex-col max-md:w-4/5 max-md:px-6'>
            <div>
            <h2 className="text-4xl font-bold ">Let’s talk about your project</h2>
            <p className="text-xl mt-5 lg:w-3/5">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <a href="../contact.html">
            <button className="bg-white text-[#1d1c1e] px-4 py-2 rounded-md font-bold border-white border-2 hover:bg-transparent hover:text-white">GET IN TOUCH</button>
            </a>
        </section>
    )
}