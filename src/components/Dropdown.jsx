import React, { useState } from 'react';
import {User, Users, TrendingUp, ChevronDown, ChevronUp, MoveDiagonal, ShoppingBag, TimerIcon, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal'; // Import the Modal component
import SignUp from './SignUp'; // Import the SignUp component
const Dropdown = () => {
  const [showPopup, setshowPopup] = useState(false);

  return (
    <>
      <motion.button
        className="bg-green-600 p-2 mt-6 rounded-xl text-2xl"
        whileTap={{ scale: 0.8 }}
        onClick={() => setshowPopup(true)}
      >
        Join Community
      </motion.button>
      <Modal isOpen={showPopup} onClose={() => setshowPopup(false)}>
        <SignUp/>
      </Modal>

    </>
  );
};

export default Dropdown;