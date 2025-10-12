import Card from "./Card";
import styles from "./styles.module.css";

const projects: {
  title: string;
  desc: string;
  technologies: string[];
  link: string;
}[] = [
  // {
  //   title: "dahu",
  //   desc: "Dahu is a color theme extension for Visual Studio Code. It allows users to generate color themes from an image, set colors for background and code syntax manually.",
  //   technologies: ["TypeScript", "Node.js", "Angular"],
  //   link: "https://github.com/dahu-theme-generator/dahu",
  // },
  {
    title: 'Language speaking app "Speaksers"',
    desc: "Language learning app, focused on peer practicing their dialog skills through speaking with each other by calling using WebRTC. Being developed using Expo, with custom backend service built with Express.js and PostgreSQL database provided by Supabase SDK. Still actively worked on.",
    technologies: ["TypeScript", "Node.js", "Expo", "WebRTC", "PostgreSQL", "Express.js"],
    link: "https://github.com/uktveris/speaksers-mobile",
  },
  {
    title: "Cloud file sharing platform",
    desc: "Cloud storage platform, having similar (yet more limited) functionality to general cloud file storage systems, such as Google Drive or ICloud. Built mostly using TypeScript, with well-known MERN stack.",
    technologies: ["TypeScript", "MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/uktveris/synterium-frontend",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className={styles.projectsContainer}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              desc={project.desc}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
