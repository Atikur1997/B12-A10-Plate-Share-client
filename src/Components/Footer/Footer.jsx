import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { NavLink } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { div } from 'framer-motion/client';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-green-600 via-lime-500 to-green-700'>
            <footer className="footer sm:footer-horizontal  text-neutral-content p-10 text-white">
                <aside>
                    <h2 className="text-3xl font-bold text-white">Food Share</h2>
                    <p className="text-sm italic mt-2 text-gray-100">
                        Share Food, Share Hope
                    </p>


                </aside>

                <nav>
                    <h6 className="footer-title text-lg font-semibold mb-3">Social</h6>
                    <div className="flex gap-5">
                        <NavLink
                            to="https://www.facebook.com/atikurrahman.nissan/about/?viewas=&should_open_composer=false&bypass_exit_warning=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-all duration-200"
                        >
                            <CiFacebook className="w-[35px] h-[35px]" />
                        </NavLink>

                        <NavLink
                            to="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-all duration-200"
                        >
                            <FaXTwitter className="w-[30px] h-[35px]" />
                        </NavLink>

                        <NavLink
                            to="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-all duration-200"
                        >
                            <FaInstagramSquare className="w-[35px] h-[35px]" />
                        </NavLink>
                    </div>
                </nav>

            </footer>
            <hr className='text-gray-300 max-w-[60%] mx-auto' />
            <p className="mt-2 text-gray-200 text-xs  text-center">
                © {new Date().getFullYear()} A.K.M. Atikur Rahman. All rights reserved.
            </p>

        </div>
    );
};

export default Footer;
