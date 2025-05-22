import React, {useState} from 'react'
import { ChevronDown, ChevronUp, MoveDiagonal, ShoppingBag, TimerIcon, X } from 'lucide-react'
import { motion } from 'framer-motion'
import axios from 'axios'

const Dropdown = () => {
  const [showPopup, setshowPopup] = useState(false);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", username, email, password);
    axios.post('', { username, email, password })
      .then(result => console.log(result))
    .catch(err => console.log(err))
    
  }
  return (
    <>
      <motion.button className='bg-green-700 p-3 px-5 font-bold mt-6 rounded-xl text-2xl hover:scale-110 hover:bg-green-800'
        whileTap={{scale:.8}}
        onClick={() => setshowPopup(true)}>Join Our Community</motion.button>
      
      {showPopup && (
        <div className="absolute top-10 left-5 w-full h-full  bg-dark  flex justify-center items-center" onClick={() => setshowPopup(false)}>
          <div className="bg-gradient-to-t from-gray-400 to-white shadow-gray-800 text-stone-900  flex justify-center rounded-2xl shadow-xl md:w-169 h-120  md:h-80" onClick={(e) => e.stopPropagation()}>
            <div>
              <X className=' absolute left-220 top-42 shadow-8xl shadow-gray-900 hover:scale-95 bg-gray-300 rounded-2xl size-6'  onClick={() => setshowPopup(false)}/>
              <img src="src/assets/bluelogo.png" className='size-55 md:absolute top-20 left-62' />
              <div className="text-container mt-28 ">
                <h1 className='text-2xl font-bold  '>Want to be part of the YoungandBullish Community? </h1>
                     <p className='mt-3 text-xl px-12  text-gray-800  font-stretch-extra-condensed '>Kindly fill out the form through the link below to become an official Youngin and hoin the YoungandBullish Community. </p>
             <button className='bg-dark text-white p-3 px-9 mt-8 not-first:rounded-xl hover:scale-110 hover:rotate-3 shadow-xl shadow-gray-700 focus:bg-dark/95 font-bold'>View Form</button>
              </div>
            </div></div>
        </div>
      
      )}
    </>
  )
}

export default Dropdown