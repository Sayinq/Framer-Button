'use client'
import { useRef, useEffect } from 'react';
import MouseFollower from "mouse-follower";
import gsap from 'gsap';

//Component
import Button from "./component/Button";
import IconButton from "./component/IconButton";

MouseFollower.registerGSAP(gsap);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cursor = new MouseFollower({
        container: containerRef.current,
        className: 'mf-cursor',
        speed: 0.1,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <main className="overflow-hidden" ref={containerRef}>
      <section className="flex justify-center items-center w-screen h-screen">
        <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-4">
          <IconButton
            icon="/menu.svg"
            bgColor=""
            borderColor="rgb(26, 26, 26, 0.1)"
            overlayColor="#d160c8"
          />
          <Button 
            main="All" // Main text
            number="" // Exponent type number
            displayOption="flex" // Hidden, None, and Flex option, if you want a hover overlay or not
            bgColor="#1A1A1A" // Whether or not you want a base bg color, usually used with a hidden overlay
            borderColor="rgb(26, 26, 26, 0.1)" // RGB value for opacity control 
            textColor="#F0EFEF" // Base text color
            hoverTextColor="#F0EFEF" // Color when text is hovered
            overlayColor=""
          />
          <Button 
            main="Design" // Main text
            number="5" // Exponent type number
            displayOption="flex" // Hidden, None, and Flex option, if you want a hover overlay or not
            bgColor="" // Whether or not you want a base bg color, usually used with a hidden overlay
            borderColor="rgb(26, 26, 26, 0.1)" // RGB value for opacity control 
            textColor="#1a1a1a" // Base text color
            hoverTextColor="#F0EFEF" // Color when text is hovered
            overlayColor="#d160c8"
          />
          <Button 
            main="Development" // Main text
            number="11" // Exponent type number
            displayOption="flex" // Hidden, None, and Flex option, if you want a hover overlay or not
            bgColor="" // Whether or not you want a base bg color, usually used with a hidden overlay
            borderColor="rgb(26, 26, 26, 0.1)" // RGB value for opacity control 
            textColor="#1a1a1a" // Base text color
            hoverTextColor="#F0EFEF" // Color when text is hovered
            overlayColor="#d160c8"
          />
        </div>
      </section>
    </main>
  );
}
