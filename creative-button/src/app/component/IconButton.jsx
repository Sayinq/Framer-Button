'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Magnetic = ({ children, distance = 4 }) => {
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

const IconButton = ({ 
    icon,
    bgColor,
    borderColor,
    overlayColor,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Magnetic>
            <motion.div
                style={{ 
                    backgroundColor: `${bgColor}`,
                    border: `1.5px solid ${borderColor}`, 
                }}
                className="relative flex justify-center items-center w-fit h-[4.75em] max-w-[200px] text-[1em] border-[1.5px] rounded-[2.125em] p-0 transition-colors duration-500 ease-in-out cursor-pointer overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                data-cursor="-inverse"
                data-cursor-stick=""
            >
                <motion.div
                    initial={{ y: '-100%' }}
                    animate={isHovered ? { y: 0 } : { y: '-100%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.25, delay: 0.15, ease: 'easeInOut' }}
                    style={{ 
                        backgroundColor: `${overlayColor}`,
                    }}
                    className="absolute top-0 left-0 w-full h-full rounded-[2.125em]"
                />
                <TextMagnet>
                    <div className="relative flex justify-center items-center w-full h-full px-8 select-none">
                        <div className="w-full h-fit relative">
                            <div className="w-full h-full relative">
                                <img
                                    src={icon}
                                    alt=""
                                    className="w-[25px] h-[25px]"
                                />
                            </div>
                        </div>
                    </div>
                </TextMagnet>
            </motion.div>
        </Magnetic>
    );
};

export default IconButton;