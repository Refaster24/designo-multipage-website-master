import './contact.css'


export default function CountactUs(){

    function handleSubmit(e){
        e.preventDefault()

        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const phoneNumber = document.getElementById('phoneNumber')

        const nameSpan = document.getElementById('nameSpan')
        const emailSpan = document.getElementById('emailSpan')
        const phoneNumberSpan = document.getElementById('phoneNumberSpan')

        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // return to default

            nameSpan.style.display='none'
            name.style.borderBottomColor = 'white'
            emailSpan.style.display='none'
            email.style.borderBottomColor = 'white'
            phoneNumberSpan.style.display='none'
            phoneNumber.style.borderBottomColor = 'white'

        ///////

        if(name.value.length === 0){
            nameSpan.style.display='block'
            name.style.borderBottomColor = 'rgb(220 38 38)'
        }
          
        if(!email.value.match(pattern) || email.value.length === 0){
            emailSpan.style.display='block'
            email.style.borderBottomColor = 'rgb(220 38 38)'
        }
        
        if(phoneNumber.value.length < 8){
            phoneNumberSpan.style.display='block'
            phoneNumber.style.borderBottomColor = 'rgb(220 38 38)'
        }
    }


    return(
        <section className='bg-[#E7816B] text-white flex items-center gap-4 rounded-md p-4 mx-auto mb-12 w-[60em] max-lg:text-center max-lg:w-[45em] max-lg:flex-col max-md:w-auto max-md:rounded-none'>
            <div className="basis-1/2 relative py-28 pl-12 max-lg:px-4 max-lg:py-8">

                <h1 className="text-5xl">Contact Us</h1>

                <p className="text-xl my-4">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>

            </div>

            <form action="" id='form' onSubmit={handleSubmit} className='basis-2/5'>
                <div>
                    <span id="nameSpan" className='text-end italic text-white'>Can't be empty</span>
                    <input id='name' className="border-2 border-transparent border-b-white p-3 bg-transparent outline-none placeholder-white text-white w-full focus-visible:border-b-black my-4" type="text" placeholder="Name" aria-placeholder="Name"/>
                </div>

                <div>
                    <span id="emailSpan" className='text-end italic text-white'>Look like this is not email</span>
                    <input id='email' className="border-2 border-transparent border-b-white p-3 bg-transparent outline-none placeholder-white text-white w-full focus-visible:border-b-black my-4" type="text" placeholder="Email Address" aria-placeholder="Email Address"/>

                </div>

                <div>
                    <span id="phoneNumberSpan" className='text-end italic text-white'>Field cannot be phone number</span>
                    <input id='phoneNumber' className="border-2 border-transparent border-b-white p-3 bg-transparent outline-none placeholder-white text-white w-full focus-visible:border-b-black my-4" type="text" placeholder="phone number" aria-placeholder="phone number"/>
                </div>

                <textarea className="border-2 border-transparent border-b-white p-3 bg-transparent outline-none placeholder-white text-white w-full h-[5em] overflow-x-auto mb-4 resize-none focus-visible:border-b-black" placeholder="message" aria-placeholder="message"/>

                <button type="submit" className="bg-white text-[#1d1c1e] w-full px-4 py-2 rounded-md font-bold border-white border-2 hover:bg-transparent hover:text-white">submit</button>
            </form>
        </section>
    )
}