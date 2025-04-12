
import React,{ useState } from "react";
import { Menu, X, Home,Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const W_navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [Open, setOpen] = useState(false);
    const Toggle = () => {
      setOpen(!Open)
      
  }
  
    return (
      <nav className="sticky top-0 left-0 right-0 bg-gray-100 rounded-b-3xl shadow-md  shadow-gray-400 z-50">
        <div className=" max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-20">
            <div className=" flex items-center ">
            <img src="src/assets/bluelogo.png" alt="" className="w-70" />
              <span className="text-xl font-bold text-primary">
               
                
              </span>
            </div>
            <div className=" hidden md:flex items-center space-x-16">
             <Link to = "/"><a
                href="#"
                className="text-primary  text-xl hover:font-bold flex   hover:text-blue-500  transition-colors"
              ><Home className="size-5 mt-1.5 mr-1"/> Home
               
              </a>
              </Link>
              <Link  to ="/About">
              <a
                href="#"
                className="text-primary flex text-xl hover:text-blue-500 hover:font-bold transition-colors"
              >
               <img src="src/assets/multicontact.png" alt="" className="size-8 text-primary" /> About Us
              </a></Link>
              <Link  to ="/Contact">
              <a
                href="#"
                className="text-primary text-xl flex hover:text-blue-500 hover:font-bold transition-colors"
              > <Phone className="size-5 mr-1 mt-1.5"/>
                Contact Us
              </a></Link>
            <br /><br /><br />
            </div>
            {Open ? (
          <ul className="bg-gray-500 w-30 fixed text-center rounded-xl  top-23 right-20">
            <li className='hover:bg-blue-500 font-sans font-semibold p-2 '>x</li>
            <li className='hover:bg-blue-500 font-sans font-semibold p-2 ' >whatsapp</li>
            <li className='hover:bg-blue-500 font-sans font-semibold p-2 ' >instagram</li>
          </ul>
        ) :null}
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-lg"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="px-4 pt-2 pb-4 space-y-3 bg">
              <Link to={"/"}>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2 pl-8   hover:bg-orange-400 rounded-full"
              >
                Home
              </a></Link>
            <Link to={"/about"}>
              <a

                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2 pl-8 hover:bg-orange-400 rounded-full"
              >
                About Us
              </a> </Link>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    );
};
export default W_navigation;