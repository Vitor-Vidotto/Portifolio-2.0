'use client'
import Navbar from "../components/NavBars";
import ProjectsSection from "../components/ProjectsSection";
import ThreeDScene from "../components/ThreeDScene";

export default function Projetos() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />

      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
      <a
  href="https://www.linkedin.com/in/vitor-vidotto"
  target="_blank"
  rel="noopener noreferrer"
  className="sticky bottom-0 right-0 m-4 rounded-full flex items-center justify-end text-sm sm:text-base md:absolute md:bottom-4 md:right-4"
  title="Entrar em contato"
>
  <ThreeDScene />
</a>

    </main>
  );
}
