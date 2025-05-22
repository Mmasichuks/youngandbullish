import Navigation from "../components/Navigation.jsx"
import { useRef } from "react";
import Footer from "../components/Footer.jsx"
import { motion,useScroll,useTransform,useSpring } from "framer-motion"
import Team from "../components/Team.jsx";


function About() {

    
    
    return (
        <>
            <div className="min-h-screen w-full bg-gray-200 text-primary transition-all">
            <Navigation />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                    <p className="md:text-4xl text-2xl  animate-bounce font-sans font-semibold text-center mb-20 ">We are all about Sharing & Building <br className="md:hidden" /> Web3 Success stories.</p>
                    <div className="bg-amber-100 py-17 rounded-2xl px-0 md:px-6 pl-0 md:pl-11 grid lg:grid-cols-3 gap-24 md:gap-6 sm:grid-cols-1 md:grid-cols-2  justify-center "> 
                        <motion.div className=" sm:text-lg font-bold  size-fit "
                        initial={{
                            opacity: 0,
                            y:100,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            
                        }}
                        transition={{
                            
                            duration:3,delay:0.5
                            }}
                        >
                        <p className=" text-3xl text-center font-bold py-6 outline-5 outline-stone-700">Who Are We </p>
                        <div className="text-white text-left shadow-2xl hover:scale-110 transition-all shadow-gray-600 p-6 sm:p-8 bg-orange-500 backdrop-blur-lg rounded-xl w-80 leading-11 "
                          >
                            <p>The YoungandBullish community is a purpose-driven tribe dedicated to building and showcasing authentic Web3 success stories, helping to shape the future of young Nigerians.
                                </p>
                            
                          </div>
                    </motion.div>
                    

                    <motion.div
                            className=" sm:text-lg font-bold w-fit"
                            initial={{
                                opacity: 0,
                                y:100,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                
                            }}
                            transition={{
                                
                                duration:3, delay:0.5
                          }}>
                        <p className=" text-3xl text-center font-bold py-6 outline-5 outline-stone-700">What We Do </p>
                     <div className="text-white text-left shadow-2xl hover:scale-110 font-family transition-all shadow-gray-600 p-6 sm:p-10 bg-blue backdrop-blur-lg rounded-xl w-83  leading-10"
                          >
                            <p>We offer real-life success stories and guidance through practical opportunities for young people to thrive in the Blockchain industry, demonstrating that success can be achieved with integrity and ethics.</p>
                            
                          </div>
                    </motion.div>
                
                        <motion.div className=" sm:text-lg font-bold w-fit text-center "
                            initial={{
                                opacity: 0,
                                y:100,
                            }}
                             whileInView={{
                                y: 0,
                                opacity: 1,
                                
                            }}
                            transition={{
                                
                                duration:3,delay:0.5
                          }}>
                        <p className=" text-3xl text-center  font-bold py-6 outline-5 outline-stone-700">Why It Matters </p>
                     <div className="text-white text-left shadow-2xl hover:scale-110 transition-all shadow-gray-600 p-6 sm:p-8 bg-green-500 backdrop-grayscale-100 rounded-xl w-80 leading-9"
                          >
                            <p>In a country where young people often believe that fraud is the only way to financial freedom. YoungandBullish is here to prove that there are legitimate ways to achieve significant wealth and career growth through hardwork, smart decisions, and the right opportunities.
                         </p>
                            
                          </div>
                    </motion.div></div>
            <hr className="mt-40 text-xs text-blue" />
                    <section className="text-blue  body-font" >
                        <div className="container px-5 py-18 mx-auto">
    <div className="flex flex-col text-center w-full mb-14">
      <h1 className="sm:text-3xl text-2xl font-bold font-sans title-font mb-4 f">The YAB Crew</h1>
     
                </div>
                <div className="flex flex-wrap -m-2">
                <Team
                name="King chikwe" role="Co-Founder" />
                
                <Team name="victor chikwe"role="CEO" />
                
                <Team name="Dave" role="designer" />
                                <Team name="Dave" role="designer" />
                                <Team name="Dave" role="designer" />
                                <Team name="Dave" role="designer" />
                                <Team name="Dave" role="designer" />
                                <Team name="Dave" role="designer" />
                                <Team name="Dave" role="designer" />
                </div>
            </div></section>
            </main>  
            </div>
            <Footer/>
            
        </>
    )
}
export default About;