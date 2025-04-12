import Navigation from "../components/Navigation.jsx"
import { useRef } from "react";
import Footer from "../components/Footer.jsx"
import { motion,useScroll,useTransform,useSpring } from "framer-motion"
import Team from "../components/Team.jsx";


function About() {

    
    
    return (
        <>
            <div className="min-h-screen w-full bg-gray-200 text-primary">
                <Navigation />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                    <p className="text-4xl text-center mb-20">We are all about Sharing & Building Web3 stories.</p>
                    <div className="">
                        <div className="text-2xl sm:text-lg font-bold mb-22">
                        <p className="ml-5 text-2xl font-bold">Who are We :</p>
                        <div className="text-white shadow-2xl shadow-gray-600 p-6 sm:p-8 bg-orange-500 backdrop-blur-lg rounded-xl w-1/2 leading-9 "
                          >
                            <p>Young and Bullish is a purpose-driven clan focused on showcasing and building legitimate
                                Sucess Stories through cryptocurrency trading and web3 job opportunities, particularly for youg Nigerians.
                            </p>
                            
                          </div>
                    </div>
                    <br /><br /><br />

                    <div
                        className=" justify-items-end text-2xl sm:text-lg font-bold mb-22">
                        <p className="mr-4 text-2xl font-bold">What we Do :</p>
                     <div className="text-white shadow-2xl shadow-gray-600 p-6 sm:p-10 bg-primary backdrop-blur-lg rounded-xl w-1/2 text-right leading-10"
                          >
                            <p>We offer guidiance, real-life success stories, and practical opportunities for
                                Young people to thrive in the growing crypto and web3 industries, proving that
                            success can be achieved ethically and without resorting to fraud.</p>
                            
                          </div>
                    </div>
                    <br /><br /><br />
                        <div className="text-2xl sm:text-lg font-bold mb-22">
                        <p className="ml-5 text-2xl font-bold">Why it Matters :</p>
                     <div className="text-white shadow-2xl shadow-gray-600 p-6 sm:p-8 bg-green-500 backdrop-grayscale-100 rounded-xl w-1/2 leading-9"
                          >
                            <p>In a country where young people often feel that fraud is the only way to financial
                                freedom. Young and bullish is breaking the narrative. We are here to prove that there is a legitimate ways
                                to achieve significant wealth and career growth through hardwork, smart decisions, and the right opportunities.
                         </p>
                            
                          </div>
                    </div></div>
            <hr className="mt-40 text-xs text-primary" />
                    <section className="text-primary  body-font" >
                        <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                <Team
                name="Kng chikwe" role="Brand Fool" />
                
                <Team name="victor chikwe"role="CEO" />
                
                <Team name="Skinny Bastard" role="designer" />
                
                <Team name="Skinny Bastard" role="designer" />
                
                <Team name="Skinny Bastard" role="designer" />
                
                <Team name="Skinny Bastard" role="designer" />
                
                <Team name="Skinny Bastard" role="designer" />
                
                <Team name="Skinny Bastard"role ="designer"/>

            </div>
            </div></section>
            </main>  
            </div>
            <Footer/>
            
        </>
    )
}
export default About;