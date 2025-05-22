import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SRC from "../assets/backgroundOff.png"
const W_footer = () => {
    return (
        <>
            <motion.section
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <footer className="bg-blue border-t border-blue-900/30 pt-8 pb-4">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        {/* Big Logo */}
                        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0 min-w-[260px]">
                            <img
                                src={SRC}
                                alt="Young & Bullish"
                                className="h-36 w-auto object-contain"
                            />
                        </div>
                        {/* About & Follow Us as spaced, underlined lists */}
                        <div className="flex-1 flex flex-row justify-center gap-24">
                            <div>
                                <h2 className="text-sm font-bold uppercase text-orange-500 mb-4 text-center">About Us</h2>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <Link
                                            to="/About"
                                            className="block text-white text-base border-b-2 border-blue-100 pb-1 hover:border-orange-500 transition"
                                        >
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/Contact"
                                            className="block text-white text-base border-b-2 border-blue-100 pb-1 hover:border-orange-500 transition"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-sm font-bold uppercase text-green-500 mb-4 text-center">Follow Us</h2>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-white text-base border-b-2 border-blue-100 pb-1 hover:border-green-500 transition"
                                        >
                                            X
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-white text-base border-b-2 border-blue-100 pb-1 hover:border-green-500 transition"
                                        >
                                            TikTok
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block text-white text-base border-b-2 border-blue-100 pb-1 hover:border-green-500 transition"
                                        >
                                            YouTube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Contact Button */}
                        <div className="flex flex-col items-center md:items-end gap-4 min-w-[180px]">
                     
                            <Link
                                to="/Contact"
                                className="bg-white text-blue px-8 py-3 rounded-full font-semibold shadow hover:bg-wite-800 transition text-base"
                            >
                                Contact Us

                            </Link>
                        </div>
                    </div>
                    <hr className="my-6 border-blue-900/20" />
                    <div className="text-center text-xs text-gray-500">
                        © 2025 <a href="https://youngandbullish.com/" className="hover:underline">YoungandBullish™</a>. All Rights Reserved.
                    </div>
                </footer>
            </motion.section>
        </>
    );
};

export default W_footer;