import React from 'react'
import { ChevronDown, ChevronUp, MoveDiagonal, TimerIcon, X } from 'lucide-react'
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
            className="mt-10 bg-green-600 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 mx-auto transition-colors"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
        }}
      >Join Our Community
      </motion.button>
      <br/>
           {Open ? (
        <div className="bg-amber-600 h-78 w-4/5 absolute left-20 bottom-40 ">
          <X className=''/>
          <img src="src/assets/y&b_logo.png" alt="" className='size-32' />
          </div>
        ) :null}
    </div>
  )
}

export default Dropdown