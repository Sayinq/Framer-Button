'use client'
import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Button = () => {
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (event) => {
        x.set(event.clientX - 10);
        y.set(event.clientY - 10);
    };

    return (
        <motion.div
            className="relative flex justify-center items-center w-full h-[4.75em] max-w-[200px] text-[1em] text-[#1a1a1a] border-[1.5px] border-[#1a1a1a]/10 rounded-[2.125em] bg-transparent p-0 cursor-pointer px-2 overflow-hidden"
            onMouseMove={handleMouseMove}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ translateY: -400 }}
                animate={{ translateY: isHovered ? 0 : -400 }}
                end={{ translateY: isHovered ? 400 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-full bg-[#148CEE] rounded-[2.125em]"
            />
            <div className="relative w-fit h-fit select-none">
                <div className="w-fit h-fit">
                    <motion.span
                        className="text-lg font-normal"
                        style={{ x, y }}
                    >
                        Development
                    </motion.span>
                </div>
                <div className="absolute top-[-30%] right-[-15%] w-fit h-fit">
                    <span className="text-xs text-[#1c1c1c]/60">11</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Button;


