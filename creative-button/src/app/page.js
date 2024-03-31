import Image from "next/image";

//Component
import Button from "./component/Button";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="flex justify-center items-center w-screen h-screen">
        <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-4">
          <Button 
            main="Development" // Main text
            number="11" // Exponent type number
            displayOption="flex" // Hidden, None, and Flex option, if you want a hover overlay or not
            bgColor=""
            borderColor="rgb(26, 26, 26, 0.1)" // RGB value for opacity control 
            textColor="#1a1a1a" // Base text color
            hoverTextColor="#F0EFEF" // Color when text is hovered
            overlayColor="#3048d1"
          />
        </div>
      </section>
    </main>
  );
}
