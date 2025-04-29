
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
              <span className="text-xl font-bold text-blue">
               
                
              </span>
            </div>
            <div className=" hidden md:flex items-center space-x-16">
             <Link to = "/"><a
                href="#"
                className="text-blue  text-xl hover:font-bold flex   hover:text-blue-500  transition-colors"
              ><Home className="size-5 mt-1.5 mr-1"/> Home
               
              </a>
              </Link>
              <Link  to ="/About">
              <a
                href="#"
                className="text-blue flex text-xl hover:text-blue-500 hover:font-bold transition-colors"
              >
               <img src="src/assets/multicontact.png" alt="" className="size-8 text-blue" /> About Us
              </a></Link>
              <Link  to ="/Contact">
              <a
                href="#"
                className="text-blue text-xl flex hover:text-blue-500 hover:font-bold transition-colors"
              > <Phone className="size-5 mr-1 mt-1.5"/>
                Contact Us
              </a></Link>
            
            </div>
        
            <div className="md:hidden">
              <button
                className="text-blue hover:text-orange-500"
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
            className="md:hidden bg-blue/95 backdrop-blur-lg"
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
                className="flex text-gray-300 hover:text-white transition-colors py-2 pl-8   hover:bg-blue-600 rounded-full"
              ><Home className="size-5 mt-1.5 mr-3"/>
                Home
              </a></Link>
            <Link to={"/about"}>
              <a

                href="#"
                className="block text-gray-300 hover:text-white transition-colors py-2 pl-8 hover:bg-blue-600 rounded-full"
              >
                About Us
              </a> </Link>
              <Link to={"/Contact"}>
              <a

                href="#"
                className="flex text-gray-300 hover:text-white transition-colors py-2 pl-8 hover:bg-blue-600 rounded-full"
              ><Phone className="size-4 mr-3 mt-1.5"/>
                Contact Us
              </a> </Link>
            </div>
          </motion.div>
        )}
      </nav>
    );
};
export default W_navigation;