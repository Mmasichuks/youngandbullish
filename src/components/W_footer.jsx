import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LOGO from "../assets/bluelogo.png"
const W_footer = () => {
<<<<<<< HEAD
  return (
      <>
          <footer>
              


              
              {/* Mobile version for Footer */}
              <div className='p-4'>
              <div className="img-container flex justify-center   md:justify-start md:top-312 ml-6 mr-6 md:absolute">
                  <img src="src/assets/bluelogo.png" className='size-50 md:size-60' />
              </div>
              <div className="grid grid-cols-2 text-center relative md:left-130 md:w-150 pt-2">
                       
                            <div className=''>
                                <h2 className="mt-3  text-lg font-bold   uppercase text-orange-400">About us</h2>
                                <ul className="text-black  font-medium">
                                <Link to='/About'><li className="my-4">
                                       <a href="" className="hover:underline">Team</a>
                                    </li> </Link>
                                    <li>
                                        <a href="" className="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <h2 className="mt-3 text-lg font-semibold  uppercase text-green-500">Follow us</h2>
                                <ul className="text-black font-medium">
                                    <li className="my-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">X</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className="hover:underline">TikTok</a>
                                    </li>
                                    <li >
                                        <a href="#" className="hover:underline">YouTube</a>
                                    </li>
                                </ul>
                  </div></div>
              
              <div className="bottom_footer flex  justify-center mt-6 md:absolute md:left-287 md:top-350 ">
              <button className=' focus:bg-gray-300/35  text-white bg-blue p-3 px-7 md:p-4 md:text-2xl font-bold  rounded-lg'>Contact Us</button>
              </div>
              <div className='flex  justify-center mt-5 mr-2 md:absolute md:left-340 md:top-356'> <div className="flex ">
              <a href="#" className="hover:text-gray-500 text-blue hover:animate-bounce">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="hover:text-gray-500 text-blue ms-5 hover:animate-bounce">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="hover:text-gray-500 text-blue ms-5 hover:animate-bounce">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="hover:text-gray-500 text-blue ms-5 hover:animate-bounce">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
             
          </div>
              </div>
                  
              <hr className=" border-gray-300 mt-3 " />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://youngandbullish.com/" class="hover:underline">YoungandBullish™</a>. All Rights Reserved.
          </span>
              </div></div>
          </footer>
          
=======
    return (
        <>
            <motion.section
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <footer className="bg-white border-t border-blue-900/30 pt-8 pb-4">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        {/* Big Logo */}
                        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0 min-w-[260px]">
                            <img
                                src={LOGO}
                                alt="Young & Bullish"
                                className="h-36 w-auto object-contain"
                            />
                        </div>
                        {/* About & Follow Us as spaced, underlined lists */}
                        <div className="flex-1 flex flex-row justify-center gap-24">
                            <div>
                                <h2 className="text-sm font-bold uppercase text-orange-500 mb-4 text-center">About Us</h2>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <Link

                                            to="/About"
                                            className="block text-blue-900 text-base border-b-2 border-blue-100 pb-1 hover:border-orange-500 transition"
                                        >
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/Contact"
                                            className="block text-blue-900 text-base border-b-2 border-blue-100 pb-1 hover:border-orange-500 transition"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-sm font-bold uppercase text-green-500 mb-4 text-center">Follow Us</h2>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-blue-900 text-base border-b-2 border-blue-100 pb-1 hover:border-green-500 transition"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-blue-900 text-base border-b-2 border-blue-100 pb-1 hover:border-green-500 transition"
                                        >
                                            TikTok
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-blue-900 text-base border-b-2 border-blue-100 pb-1 hover:border-green-500 transition"
                                        >
                                            YouTube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Contact Button */}
                        <div className="flex flex-col items-center md:items-end gap-4 min-w-[180px]">
                            {/* <a
                                href="/Contact"
                                className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition text-base"
                            >
                                Contact Us
                            </a> */}
                            <Link
                                to="/Contact"
                                className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition text-base"
                            >
                                Contact Us

                            </Link>
                        </div>
                    </div>
                    <hr className="my-6 border-blue-900/20" />
                    <div className="text-center text-xs text-gray-500">
                        © 2025 <a href="https://youngandbullish.com/" className="hover:underline">YoungandBullish™</a>. All Rights Reserved.
                    </div>
                </footer>
            </motion.section>
>>>>>>> 2a0b71e929ce396285d43e50927e5d55364486a6
        </>
    );
};

export default W_footer;