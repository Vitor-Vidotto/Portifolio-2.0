'use client';
import Image from "next/image";
import ThreeDScene from "./components/ThreeDScene"
import TypewriterLoop from "./components/typeloop";
import Navbar from "./components/NavBars";
import dynamic from "next/dynamic";
import FrontPage from "./components/FrontPage";
const ActiveTooltip = dynamic(() => import('./components/ActiveTooltip'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <FrontPage />
      <a
  href="/contato"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 m-4 rounded-full flex items-center justify-end text-sm sm:text-base"
  title="Entrar em contato"
>

      <ActiveTooltip
  tooltipText={
    <>
      Precisa de ajuda? <br /> Entre em contato!
    </>
  }
>
  <ThreeDScene />
</ActiveTooltip>
  </a>
    </main>
  );
}
