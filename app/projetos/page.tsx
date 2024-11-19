'use client'
import dynamic from "next/dynamic";
import Navbar from "../components/NavBars";
import ProjectsSection from "../components/ProjectsSection";
import ThreeDScene from "../components/ThreeDScene";
const ActiveTooltip = dynamic(() => import('../components/ActiveTooltip'), {
  ssr: false,
});

export default function Projetos() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />

      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
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
