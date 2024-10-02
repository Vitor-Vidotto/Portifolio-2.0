"use client";
import React from "react";
import { Chrono } from "react-chrono";

const TIMELINE_DATA = [
  {
    title: "2022 - 2023",
    cardTitle: "LIGA FACENS - Laboratório de Inovação de Games e Apps",
    cardSubtitle: "Desenvolvedor Voluntário",
    cardDetailedText:
      "Desenvolvi aplicações utilizando Unity e participei de projetos baseados em requisitos de clientes, fortalecendo minhas habilidades em desenvolvimento de jogos e software.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/liga-facens.jpg",
      },
    },
  },
  {
    title: "2023 - 2024",
    cardTitle: "NetCreator Soluções em TI",
    cardSubtitle: "Estágio em Programação",
    cardDetailedText:
      "Desenvolvi projetos frontend e mobile, executei testes automatizados e gerenciei projetos, adquirindo experiência prática em desenvolvimento de software e liderança de projetos.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/netcreator.jpg",
      },
    },
  },
  {
    title: "2024 - Atualmente",
    cardTitle: "Aliança Engenharia Integrada",
    cardSubtitle: "Estágio em Inovação TI",
    cardDetailedText:
      "Atuo na automação de processos e desenvolvimento de soluções pontuais para plataformas internas, além de suporte de infraestrutura. Estou continuamente aprimorando minhas habilidades em backend e automação.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/alianca.jpg",
      },
    },
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <Chrono
        items={TIMELINE_DATA}
        mode="VERTICAL_ALTERNATING"
        disableToolbar
        cardHeight={200}
        theme={{
          primary: "#0047AB",
          secondary: "#D3D3D3",
          cardBgColor: "#f0f0f0",
          cardForeColor: "white",
          titleColor: "white",
        }}
      />
    </div>
  );
};

export default Timeline;
