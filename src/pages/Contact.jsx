import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {LucideContact, PhoneIcon,MailIcon,} from 'lucide-react'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ynarxpc', 'template_6swfa3s', form.current, {
        publicKey: 'APssqMq6PdlozPBlQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
      
    <>
      <Navigation/>
            <div className=" w-full text-white">
            
              <main className="max-w-7xl flex justify-center  pt-16 pb-10 lg:ml-30">
                  
                  <div className="bg-gradient-to-bl from-gray-700 to-blue bg-blue rounded-lg w-100 sm:w-200 h-170  md:h-175 ">
                      <h1 className='font-serif font-black  text-3xl px-8 pt-4'>Contact US</h1>
                      <p className='ml-5 text-sm text-primary'>Send Us a Message we will give a quick reply</p>
                      <form onSubmit={sendEmail} ref={form} >
                      <div  className="form bg-gradient-to-l from-white text-center to-gray-300 rounded-xl text-stone-900 mt-5 mx-4 pl-6 py-10 text-lg ">
                          <div className="name mt-4 text-sm md:text-xl "><label htmlFor="name" className='ml-6 md:ml-18 flex'><LucideContact className='mr-2'/>Full Name :</label><input type="text" id='name' name='user_name' className=' bg-white border-2  rounded-lg text-dark w-75 md:w-150   p-2' /></div>
                          <div className="Email mt-6 text-sm md:text-xl  "><label htmlFor="email" className='ml-6 md:ml-18 flex'><MailIcon className='mr-2'/> Email :</label><input type="text" id='email' name='user_email' className='bg-white border-2  text-dark rounded-lg w-75 md:w-150 ml-2  p-2' /></div>
                          <div className="whatsapp number mt-6 text-sm md:text-xl "><label htmlFor="number" className='ml-6 md:ml-18 flex'><PhoneIcon className='mr-2'/>Phone Number :</label><input type="text" id='number' name='phone number' className='text-dark bg-white border-2 rounded-lg w-75 md:w-150 ml-3 p-2' /></div>
                          <div className="message mt-11  text-sm md:text-xl "><textarea id='message' name='message' className='border-2  bg-white rounded-lg w-75 md:w-150   text-center h-30 p-2 text-dark ml-3' placeholder='Reaon For Reaching Out'></textarea></div>
                          <button type='submit' className='bg-blue text-white relative left-20 md:left-60  top-5 md:top-8 rounded-lg focus:scale-120 hover:scale-95 hover:brightness-120 hover:text-xl  px-6 p-2'>Submit</button>
                      </div>
                      </form>
                 </div>
                  </main>

              </div>
        
      </>
  )
}

export default Contact