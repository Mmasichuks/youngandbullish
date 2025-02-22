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
import SuccessStory from "../components/SucessStory";
import Navigation from "../components/Navigation";
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
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          className="text-center mb-24"
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Young and <span className="text-blue-400">Bullish</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Proving you don't need fraud to make it big. Brace yourself are you ready to be young and bullish.
          </p>
        
          <Dropdown/>
        </motion.div>
        <br />
    
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24"
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
      stat: "500+",
      label: "Success Stories",
    },
    {
      icon: Users,
      stat: "10,000+",
      label: "Community Members",
    },
    {
      icon: BookOpen,
      stat: "50+",
      label: "Educational Resources",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-colors"
      variants={fadeInUp}
    >
      <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
      <div className="text-2xl sm:text-3xl font-bold mb-2">
        {item.stat}
      </div>
      <div className="text-gray-300">{item.label}</div>
    </motion.div>
  ))}
     
        </motion.div>
        <section className="mb-24">
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
            Success Stories
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
            <SuccessStory
              name="David Adeleke"
              achievement="From beginner to Web3 developer in 6 months, now earning in crypto"
              image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60"
            />
            <SuccessStory
              name="Sarah Okonjo"
              achievement="Built a successful NFT marketplace, generating sustainable income"
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60"
            />
            <SuccessStory
              name="Michael Obi"
              achievement="Turned $500 into $50,000 through smart, legitimate crypto trading"
              image="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&auto=format&fit=crop&q=60"
            />
          </motion.div>
        </section>
        <section className="mb-24">
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
        <motion.section
          className="text-center bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-400/10 rounded-2xl p-8 sm:p-16"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto px-4">
            Join our community of ambitious young Nigerians building legitimate
            wealth through cryptocurrency and Web3 opportunities.
          </p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition-colors"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Get Started Today <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
}
export default LandingPage;
