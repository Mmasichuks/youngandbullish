import React from "react";
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
import Dropdown from "../components/Dropdown";
import { motion } from "framer-motion";
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
// navigation section


//success story secton

//value card section

function LandingPage() {
   //const [Open, setOpen] = useState(false)
  return (
    <>
    <div className="min-h-screen w-full bg-primary backdrop-contrast-75 text-white">
      <W_navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-16">
        <motion.div
          className="text-center mb-12 relative bottom-25"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <img src="src/assets/y&b_logo.png" alt="y&b logo" className="relative left-100 top-17  lg:size-80 sm:size-12" />
          
          <h1 className="text-3xl  sm:text-4xl md:text-6xl font-bold mb-8">
          Young<span className="text-orange-400">and</span>Bullish
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Proving you don't need fraud to make it big. Brace yourself are you ready to be young and bullish.
          </p>
        
          <Dropdown/>
        </motion.div>
        
    
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
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
      className="text-center p-6 sm:p-8 bg-gray-200 shadow-lg shadow-gray-500 backdrop-blur-lg rounded-xl    transition-colors"
      variants={fadeInUp}
    >
      <item.icon className="w-8 h-8 text-green-500 mx-auto mb-4" />
      <div className="text-2xl text-primary sm:text-3xl font-bold mb-2">
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
            viewport={{
              once: true,
            }}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
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
      </>
  );
}
export default LandingPage;
