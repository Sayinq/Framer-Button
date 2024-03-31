import Image from "next/image";

//Component
import Button from "./component/Button";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="flex justify-center items-center w-screen h-screen">
        <Button />
      </section>
    </main>
  );
}
