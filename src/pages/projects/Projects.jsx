import React from "react";
import cl from "./Projects.module.scss";
import Project from "../../components/Project";
import cyberPunk from "../../media/Cyberpunk.webp";
import yandexGo from "../../media/Yandex-GO.webp";
import store from "../../media/store.png";

const projectsData = [
  {
    name: "NextJs + redux toolkit store",
    img: store,
    description:
      "Interactive e-commerce application built with Next.js and Redux Toolkit for centralized state management. The project includes functionality for viewing and sorting products, as well as tools for creating, editing, and deleting them. This solution demonstrates proficiency with the modern React stack and effective client-side state management.",
    stack: {
      lib: "NextJs",
      style: "Tailwind",
    },
    repoLink: "https://github.com/Whysobad7/alfa",
    demoLink: "https://alfa-kappa.vercel.app/",
  },
  {
    name: "Cyberpunk",
    img: cyberPunk,
    description:
      "One of my early educational projects: a landing page advertising the second masterpiece game from the Polish company CD Projekt Red. I am not sure if it can be called a commercial project, as I took on the task of developing this order for free on a freelance platform to gain experience.",
    stack: {
      lib: "Native JS",
      style: "SCSS",
    },
    repoLink: "https://github.com/Whysobad7/website",
    demoLink: "https://whysobad7.github.io/website/",
  },
  {
    name: "Yandex-GO",
    img: yandexGo,
    description: "Another landing page, advertising Yandex-GO.",
    stack: {
      lib: "Native JS",
      style: "SCSS",
    },
    repoLink: "https://github.com/Whysobad7/Yandex-GO",
    demoLink: "https://whysobad7.github.io/Yandex-GO/",
  },
];

function Projects() {
  return (
    <section className={cl.projects}>
      <h3>Works</h3>
      <div className={cl.projectsGrid}>
        {projectsData.map((project) => (
          <Project key={project.name} props={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
