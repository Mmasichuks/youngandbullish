import React from "react";
import { motion } from "framer-motion";

import {

   
  
  

  } from "lucide-react";

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

const ValueCard = (props ) => (
    <motion.div
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 h-full"
      variants={fadeInUp}
    >
    {props.icon && <props.icon/>}
      <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
      <p className="text-gray-300">{props.description}</p>
    </motion.div>
);
export default ValueCard;