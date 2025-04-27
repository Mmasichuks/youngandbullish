import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {LucideContact, PhoneIcon,MailIcon,} from 'lucide-react'

const Contact = () => {
  return (
      
      <>
            <div className="min-h-screen w-full bg-gray-200 text-white">
              <Navigation />
              <main className="max-w-7xl flex justify-center pt-16 pb-10 ">
                  
                  <div className="bg-gradient-to-bl from-gray-700 to-blue bg-blue rounded-lg w-100 sm:w-200 h-170 md:h-140 ">
                      <h1 className='font-serif font-black  text-3xl px-8 pt-4'>Contact US</h1>
                      <p className='ml-5 text-sm text-primary'>Send Us a Message we will give a quick reply</p>
                    
                      <div className="form bg-gradient-to-l from-white to-gray-300 rounded-xl text-stone-900 mt-5 mx-4 pl-6 py-6 md:py-4 text-lg ">
                          <div className="name mt-4 flex md:flex-row flex-col text-sm md:text-xl "><LucideContact/><label htmlFor="name" className='ml-2'>Full Name :</label><input type="text" id='name' className=' bg-white border-2  rounded-lg text-dark w-80 ml:5 md:ml-15 p-2' /></div>
                          <div className="Email mt-6 flex md:flex-row flex-col text-sm md:text-xl  "><MailIcon/><label htmlFor="email" className='ml-2'> Email :</label><input type="text" id='email' className='bg-white border-2  text-dark rounded-lg w-80 ml-2 md:ml-24 p-2' /></div>
                          <div className="whatsapp number mt-6 flex md:flex-row flex-col text-sm md:text-xl "><PhoneIcon/><label htmlFor="number" className='ml-2'>Phone Number :</label><input type="text" id='number' className='text-dark bg-white border-2 rounded-lg w-80 ml-3 p-2' /></div>
                          <div className="message mt-11 flex justify-center "><input type="text" id='message' className='border-2  bg-white rounded-lg w-80   text-center h-30 p-2 text-dark' placeholder='Drop Message Here' /></div>
                          <button className='bg-blue text-white relative left-50 md:left-146 top-5 md:top-1 rounded-lg focus:scale-120 hover:scale-95 hover:brightness-120 hover:text-xl  px-6 p-2'>Submit</button>
                      </div>
                     
                 </div>
                  </main>

              </div>
          <Footer/>
      </>
  )
}

export default Contact