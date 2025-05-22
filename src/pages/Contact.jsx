<<<<<<< HEAD
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LucideContact, PhoneIcon, MailIcon } from "lucide-react";
import W_footer from "../components/Footer";
=======
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import W_navigation from '../components/W_navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import "../style/contact.css";
>>>>>>> 2a0b71e929ce396285d43e50927e5d55364486a6

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ynarxpc", "template_6swfa3s", form.current, {
        publicKey: "APssqMq6PdlozPBlQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
<<<<<<< HEAD
      <Navigation />
      <div className=" w-full text-white">
        <main className="max-w-7xl flex justify-center  pt-16 pb-10 lg:ml-30">
          <div className="bg-gradient-to-bl from-gray-700 to-blue bg-blue rounded-2xl w-100 sm:w-200 h-170  md:h-175 ">
            <h1 className="font-serif font-black text-white  text-3xl px-8 pt-4">
              Contact US
            </h1>
            <p className="ml-9 text-stone-300 text-sm ">
              Interested in Collaboration? We'd love to hear from you!
            </p>
            <form onSubmit={sendEmail} ref={form}>
              <div className="form bg-gradient-to-l from-white text-center to-gray-300 rounded-xl text-stone-900 mt-5 mx-4 pl-6 py-10 text-lg ">
                <div className="name mt-4 text-sm md:text-xl ">
                  <label htmlFor="name" className="ml-6 md:ml-18 flex">
                    <LucideContact className="mr-2" />
                    Full Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className=" bg-white border-2  rounded-lg text-dark w-75 md:w-150   p-2"
                  />
                </div>
                <div className="Email mt-6 text-sm md:text-xl  ">
                  <label htmlFor="email" className="ml-6 md:ml-18 flex">
                    <MailIcon className="mr-2" /> Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="user_email"
                    className="bg-white border-2  text-dark rounded-lg w-75 md:w-150 ml-2  p-2"
                  />
                </div>
                <div className="whatsapp number mt-6 text-sm md:text-xl ">
                  <label htmlFor="number" className="ml-6 md:ml-18 flex">
                    <PhoneIcon className="mr-2" />
                    Phone Number :
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="phone number"
                    className="text-dark bg-white border-2 rounded-lg w-75 md:w-150 ml-3 p-2"
                  />
                </div>
                <div className="message mt-11  text-sm md:text-xl ">
                  <textarea
                    id="message"
                    name="message"
                    className="border-2  bg-white rounded-lg w-75 md:w-150   text-center h-30 p-2 text-black ml-3"
                    placeholder="Reason For Reaching Out"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue text-white relative left-20 md:left-60  top-5 md:top-8 rounded-lg focus:scale-120 hover:scale-95 hover:brightness-120 hover:text-xl  px-6 p-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      
=======
      <W_navigation />
      <div className="min-h-screen bg-[#020255] flex flex-col items-center justify-center p-4">
        {/* Header */}
        <header className="w-full max-w-xl mx-auto flex flex-col items-center">
          <div className="flex items-center mb-4">
            <div
              className="yb-bg-image2 rounded-full w-20 h-20 flex items-center justify-center shadow-lg mr-3"
              style={{
                // background:
                //   "linear-gradient(135deg, oklch(75% 0.183 55.934), oklch(62.7% 0.194 149.214))",
                // width: "50px",
              }}
            >
              {/* <span className="font-bold text-white text-lg">YB</span> */}
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Young
              <span style={{ color: "oklch(75% 0.183 55.934)" }} className="ml-1">And</span>
              <span style={{ color: "oklch(62.7% 0.194 149.214)" }} className="ml-1">Bullish</span>
            </h1>
          </div>
          <p className="text-base text-white/80 text-center max-w-md mb-8">
            Reach out to the YoungAndBullish web3 community! Whether you have questions, ideas, or want to collaborate, fill out the form below and we'll get back to you soon.
          </p>
        </header>

        {/* Card with animation */}
        <motion.main
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-xl bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 space-y-6"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label htmlFor="fullname" className="block text-[#020255] font-semibold mb-1">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 px-3 py-2 transition outline-none bg-white/80"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#020255] font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-3 py-2 transition outline-none bg-white/80"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#020255] font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                className="w-full rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 px-3 py-2 transition outline-none bg-white/80"
                placeholder="(Optional)"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#020255] font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 px-3 py-2 transition outline-none bg-white/80 resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="w-full py-3 mt-2 rounded-lg font-bold text-white shadow-lg transition-transform bg-gradient-to-r from-orange-400 via-yellow-400 to-green-500 hover:from-green-500 hover:to-orange-400"
              style={{
                background:
                  "linear-gradient(90deg, oklch(75% 0.183 55.934), oklch(62.7% 0.194 149.214))",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.main>
      </div>
      <Footer />
>>>>>>> 2a0b71e929ce396285d43e50927e5d55364486a6
    </>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> 2a0b71e929ce396285d43e50927e5d55364486a6
