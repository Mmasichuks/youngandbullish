import React, { useState } from "react";
import Modal from "../components/Modal.jsx";
import SignUp from "../components/SignUp.jsx";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Target,
  Users,
  ChevronDown,
  BookOpen,
} from "lucide-react";

import W_footer from "../components/W_footer.jsx";
import W_navigation from "../components/W_navigation.jsx";
import ValueCard from "../components/ValueCard";
import { delay, easeIn, motion } from "framer-motion";
import LOGO from "../assets/y&b_logo.png";

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
  },
};
const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const logoAnimation = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
    delay: 2
  }
}
// navigation section


//success story secton

//value card section

function LandingPage() {
  //const [Open, setOpen] = useState(false)
  const [showPopup, setshowPopup] = useState(false);

  return (
    <>
<<<<<<< HEAD
    
    <div className="min-h-screen w-full bg-dark backdrop-contrast-75 text-white">
      <W_navigation />
      <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8  pb-16">
        <motion.div
          className="text-center justify-items-center  mb-3 relative bottom-25"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
=======
>>>>>>> 2a0b71e929ce396285d43e50927e5d55364486a6

      <div className="min-h-screen w-full bg-dark backdrop-contrast-75 text-white">
        <W_navigation />
        <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8  pb-16">
          <motion.div
            className="text-center justify-items-center  mb-12 relative bottom-25"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}
          >

            <motion.img src={LOGO} alt="y&b logo"
              initial={{ y: 0 }}
              animate={{
                y: [0, -40, 0,
                ],
              }}
              transition={{
                delay: 2,
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeOut'

              }}
<<<<<<< HEAD
           className="relative right-14 sm:right-20 top-20 size-65 sm:size-90" />
        
          <h1 className="text-3xl   sm:text-4xl md:text-6xl font-bold mb-3">
          Young<span className="text-orange-400">and</span>Bullish
          </h1>
          <p className="text-lg md:text-xl  text-gray-300 mx-auto pb-12 ">
           <span className="font-bold text-orange-400">Proving</span> you don't need fraud to make it  <span className="font-bold text-orange-400">Big</span>
          </p>
        
          <Dropdown/>
        </motion.div>
        
    
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
        >
          {[
    {
      icon: TrendingUp,
      stat: "0",
      label: "Success Stories",
    },
    {
      icon: Users,
      stat: "200+",
      label: "Clan Members",
    },
   
  ].map((item, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
      className="text-center p-6 sm:p-8 bg-gray-200 shadow-lg shadow-gray-500 backdrop-blur-lg rounded-xl    transition-colors"
     
    >
      <item.icon className="w-8 h-8 text-green-500 mx-auto mb-4" />
      <div className="text-2xl text-blue  sm:text-3xl font-bold mb-2">
        {item.stat}
      </div>
      <div className="text-blue font-stretch-105% font-semibold">{item.label}</div>
    </motion.div>
  ))}
     
        </motion.div>
        
        <section className="mb-15">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-12 text-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          
          >
            Our Values
          </motion.h2>
=======
              className="relative right-14 sm:right-20 top-20 size-65 sm:size-90" />

            <h1 className="text-3xl   sm:text-4xl md:text-6xl font-bold mb-3">
              Young<span className="text-orange-400">and</span>Bullish
            </h1>
            <p className="text-lg font-p sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Proving you don't need fraud to make it big. Brace yourself are you ready to be young and bullish.
            </p>
            <motion.button
              className="bg-green-600 p-2 mt-6 rounded-xl text-2xl"
              whileTap={{ scale: 0.8 }}
              onClick={() => setshowPopup(true)}
            >
              Join Community
            </motion.button>
          </motion.div>


>>>>>>> 2a0b71e929ce396285d43e50927e5d55364486a6
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
          >
            {[
              {
                icon: TrendingUp,
                stat: "100+",
                label: "Success Stories",
              },
              {
                icon: Users,
                stat: "200+",
                label: "Clan Members",
              },

            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 sm:p-8 bg-gray-300 shadow-lg shadow-gray-500 backdrop-blur-lg rounded-xl    transition-colors"

              >
                <item.icon className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <div className="text-2xl text-blue sm:text-3xl font-bold mb-2">
                  {item.stat}
                </div>
                <div className="text-primary">{item.label}</div>
              </motion.div>
            ))}

          </motion.div>

          <section className="mb-15">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-12 text-center"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}

            >
              Our Values
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"

            >
              <ValueCard
                icon={Target}
                title="Relentless Drive"
                description="We pursue our goals with unwavering determination and focus"
              />
              <ValueCard
                icon={Shield}
                title="Smart Work"
                description="We believe in working intelligently and efficiently to achieve results"
              />
              <ValueCard
                icon={TrendingUp}
                title="Persistence"
                description="We never give up, no matter the challenges we face"
              />
            </motion.div>
          </section>

        </main>

      </div>
      <W_footer />


      <Modal isOpen={showPopup} onClose={() => setshowPopup(false)}>
        <SignUp />
      </Modal>
    </>
  );
}
export default LandingPage;
