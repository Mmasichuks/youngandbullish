import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import W_navigation from '../components/W_navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import "../style/contact.css";

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
    </>
  );
};

export default Contact;