'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

//Component
import Magnetic from './magnetic';

const Button = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
            <Magnetic>
                <motion.div
                    className="relative flex justify-center items-center w-full h-[4.75em] max-w-[200px] text-[1em] hover:text-white text-[#1a1a1a] border-[1.5px] border-[#1a1a1a]/10 rounded-[2.125em] bg-transparent p-0 transition-colors duration-500 ease-in-out cursor-pointer px-2 overflow-hidden"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    <motion.div
                        initial={{ translateY: -100 }}
                        animate={{ translateY: isHovered ? 0 : -100 }}
                        end={{ translateY: isHovered ? 100 : 0 }}
                        transition={{ duration: 0.25, delay: 0.15, ease: 'easeInOut' }}
                        className="absolute top-0 left-0 w-full h-full bg-[#148CEE] rounded-[2.125em]"
                    />
                    <div className="relative w-fit h-fit select-none">
                        <div className="w-fit h-fit">
                            <motion.span
                                className="text-lg font-normal"
                            >
                                Development
                            </motion.span>
                        </div>
                        <div className="absolute top-[-30%] right-[-15%] w-fit h-fit">
                            <span className="text-xs text-inherit/30">11</span>
                        </div>
                    </div>
                </motion.div>
            </Magnetic>
        );
    };

export default Button;