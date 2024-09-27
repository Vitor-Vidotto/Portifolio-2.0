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
  href="https://www.linkedin.com/in/vitor-vidotto-334912253" // Substitua pelo seu link do LinkedIn
  target="_blank" // Abre em uma nova aba
  rel="noopener noreferrer" // Para segurança
  className="sticky bottom-0 right-0 m-4 rounded-full flex items-center justify-end text-sm sm:text-base"
  style={{ position: 'sticky', float: 'right' }}
  title="Entrar em contato" // Mensagem ao passar o mouse
>
  <ThreeDScene />
</a>
    </main>
  );
}
