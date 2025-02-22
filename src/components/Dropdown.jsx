import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Dropdown = () => {
  const [Open, setOpen] = React.useState(false)
  const [icon, seticon] = React.useState(false)
  const toggleDown = () => {
    setOpen(!Open)
    seticon(!icon)
  }
  return (
    <div>
      
      <motion.button onClick={toggleDown}
            className="mt-10 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition-colors"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
        }}
      >Join Our Community{icon ? <ChevronUp /> : <ChevronDown />}
      </motion.button>
      
           {Open ? (
          <ul className='bg-gray-500 text-white  w-58 flex flex-col relative left-123  rounded-2xl    '>
            <li className='hover:bg-blue-500 font-sans font-semibold p-2 '>x</li>
            <li className='hover:bg-blue-500 font-sans font-semibold p-2 '>whatsapp</li>
            <li className='hover:bg-blue-500 font-sans font-semibold p-2'>instagram</li>
          </ul>
        ) :null}
    </div>
  )
}

export default Dropdown