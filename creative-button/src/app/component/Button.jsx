'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Magnetic = ({ children }) => {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

        magnetic.current.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        });

        magnetic.current.addEventListener('mouseleave', () => {
            xTo(0);
            yTo(0);
        });
    }, []);

    return React.cloneElement(children, { ref: magnetic });
};

const TextMagnet = ({ children, distance = 8 }) => {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

        magnetic.current.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = (clientX - (left + width / 2)) / distance;
            const y = (clientY - (top + height / 2)) / distance;
            xTo(x);
            yTo(y);
        });

        magnetic.current.addEventListener('mouseleave', () => {
            xTo(0);
            yTo(0);
        });
    }, [distance]);

    return React.cloneElement(children, { ref: magnetic });
};

const Button = ({ 
    main, 
    number,
    displayOption,
    bgColor,
    borderColor,
    textColor,
    hoverTextColor,
    overlayColor,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Magnetic>
            <motion.div
                style={{ 
                    border: `1.5px solid ${borderColor}`, 
                    color: isHovered ? hoverTextColor : textColor,
                    backgroundColor: `${bgColor}` 
                }}

                className="relative flex justify-center items-center w-full h-[4.75em] max-w-[200px] text-[1em] border-[1.5px] rounded-[2.125em] p-0 transition-colors duration-500 ease-in-out cursor-pointer px-2 overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <motion.div
                    initial={{ y: '-100%' }}
                    animate={isHovered ? { y: 0 } : { y: '-100%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.25, delay: 0.15, ease: 'easeInOut' }}
                    style={{ 
                        backgroundColor: `${overlayColor}`,
                        display: displayOption === "hidden" ? "none" : "flex",
                    }}
                    className="absolute top-0 left-0 w-full h-full rounded-[2.125em]"
                />
                <TextMagnet>
                    <div className="relative flex justify-center items-center w-full h-full select-none">
                        <div className="w-fit h-fit">
                            <motion.span className="text-lg font-normal">
                                {main}
                            </motion.span>
                            <div className="absolute top-[20%] right-[12%] w-fit h-fit">
                                <span className="text-xs text-[#9e9e9d]">{number}</span>
                            </div>
                        </div>
                    </div>
                </TextMagnet>
            </motion.div>
        </Magnetic>
    );
};

export default Button;