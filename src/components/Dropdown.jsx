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
      <motion.button className='bg-green-600 p-2 mt-6 rounded-xl text-2xl'
        whileTap={{scale:.8}}
        onClick={() => setshowPopup(true)}>Join Community</motion.button>
      
      {showPopup && (
        <div className="absolute top-10 left-5 w-full h-full  bg-dark  flex justify-center items-center" onClick={() => setshowPopup(false)}>
          <div className="bg-white text-stone-900 p-8 grid grid-cols-2  rounded shadow-md w-196" onClick={(e) => e.stopPropagation()}>
            <div>
            <img src="src/assets/IMG-20250314-WA0338 (1).jpg" alt=""/>
            </div>
            <div>
            <h2 className='text-2xl font-bold mb-4 '>Sign up</h2>
            <form onSubmit={handleSubmit} className='y&b form'>
              {/* form username */}
              <div className="mb-4">
                <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
                <input type="text" value={username} onChange={(e) => setusername(e.target.value)}
                  className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-none' />
              </div>
              {/* form email */}
              <div className="mb-4">
                <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)}
                  className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-none' />
              </div>
              {/* form password */}
              <div className="mb-4">
                <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}
                  className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-none' />
              </div>
              <button type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</button>
            </form></div></div>
        </div>
      
      )}
    </>
  )
}

export default Dropdown