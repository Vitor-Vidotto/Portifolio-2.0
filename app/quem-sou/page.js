import Navbar from "../components/NavBars";
import Timeline from "../components/TimeLine"; // Importando o componente Timeline
import AboutSection from "../components/AboutSection";
import ProjectsSectionPortifolio from "../components/ProjectsPortifolio";
import ThreeDScene from "../components/ThreeDScene";

export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
        <Timeline />
        <ProjectsSectionPortifolio />

      </div>
      <a
  href="https://www.linkedin.com/in/vitor-vidotto"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 m-4 rounded-full flex items-center justify-end text-sm sm:text-base"
  title="Entrar em contato"
>
  <ThreeDScene />
</a>

    </main>
  );
}
