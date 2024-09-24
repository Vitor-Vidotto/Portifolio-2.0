'use client';
import Image from "next/image";
import ThreeDScene from "./components/ThreeDScene"
import TypewriterLoop from "./components/typeloop";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/Vitor Vidotto.png"
          alt="Vitor Vidotto Logo"
          width={320}
          height={48}
          priority
        />
        <ol className=" text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
          <TypewriterLoop /> 
          </li>
          <li>Priorize seu tempo com minhas facilitações.</li>
        </ol>

        <a
  href="https://www.linkedin.com/in/vitor-vidotto-334912253" // Substitua pelo seu link do LinkedIn
  target="_blank" // Abre em uma nova aba
  rel="noopener noreferrer" // Para segurança
  className="absolute bottom-0 right-0 m-4 rounded-full flex items-center justify-center text-sm sm:text-base"
  title="Entrar em contato" // Mensagem ao passar o mouse
>
  <ThreeDScene />
</a>
<div className="flex flex-col items-center">
  <div className="flex gap-2">
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="/website.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Meus projetos!
    </a>
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="/person.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Me Conheça!
    </a>
  </div>
  <a
    className="mt-2 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="dark:invert"
      src="/curriculum.svg"
      alt="Vercel logomark"
      width={20}
      height={20}
    />
    Baixar Currículo!
  </a>
</div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projetos
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Serviços →
        </a>
      </footer>
    </div>
  );
}
