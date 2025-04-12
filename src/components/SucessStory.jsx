import React from "react";
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

const SuccessStory = (props) => (
    <motion.div
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/10 h-full "
      variants={fadeInUp}
    >
      <img src={props.image} alt={props.name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">{props.name}</h3>
      <p className="text-gray-300">{props.achievement}</p>
    </motion.div>
);
export default SuccessStory;
  