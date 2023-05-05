export default function DesignLinks(){
    return (
        <section className='flex gap-1 font-bold text-white my-10 py-8 mx-auto w-[60em] max-lg:w-[45em] max-lg:flex-col max-md:w-auto max-md:gap-0 max-md:mt-0 max-md:pt-0'>
            <a href="../designs/web-design.html" className='block basis-1/2'>
            <div id='webDesign' className="bg-black space-y-4 grid place-items-center rounded-md max-lg:!py-24 max-md:rounded-none">
                <h2 className="text-3xl">WEB DESIGN</h2>
                <span className="text-xl after:ml-2 after:text-[#e78168]">VIEW PROJECTS</span>
            </div>
            </a>

            <div className="flex flex-col gap-1 basis-1/2 max-md:gap-0">
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
    )
}