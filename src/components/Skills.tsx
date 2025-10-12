import styles from "./styles.module.css";
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiGnubash, SiLua } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaC, FaGolang } from "react-icons/fa6";
import { useEffect, useState } from "react";

const skillList = [
  {
    id: "linux",
    icon: <FaLinux />,
    name: "Linux",
    description: (
      <>
        Learned Linux by using multiple Linux distributions <b>(EndevourOS, Linux Mint)</b>. Learned the file system,
        together with some terminal commands.
      </>
    ),
  },
  {
    id: "git",
    icon: <FaGitAlt />,
    name: "Git",
    description: (
      <>
        Learned Git while building projects and using Git as a primary version control system. Gained knowledge in
        basics such as <b>pulling & pushing, merging</b>, etc.
      </>
    ),
  },
  {
    id: "node",
    icon: <FaNode />,
    name: "Node.js",
    description: (
      <>
        Built multiple projects with Node.js. Look into{" "}
        <a href="https://github.com/dahu-theme-generator/dahu" target="_blank">
          dahu
        </a>{" "}
        and{" "}
        <a href="https://github.com/uktveris/synterium-backend" target="_blank">
          Cloud file sharing platform
        </a>{" "}
        projects for more information.
      </>
    ),
  },
  {
    id: "bash",
    icon: <SiGnubash />,
    name: "Bash",
    description: (
      <>Basic Bash scripting knowledge, such as editing configuration files and writing basic Bash scripts.</>
    ),
  },
  {
    id: "js-ts",
    icon: <IoLogoJavascript />,
    name: "JS / TS",
    description: (
      <>
        Learned JavaScript / TypeScript while using <b>React</b> in the frontend and <b>Express.js</b> in the backend
        projects. For more information, look into{" "}
        <a href="https://github.com/uktveris/synterium-frontend" target="_blank">
          Cloud file sharing platform project
        </a>
        .
      </>
    ),
  },
  {
    id: "java",
    icon: <FaJava />,
    name: "Java",
    description: (
      <>
        Learned Java as a first language at the university, using it to complete practical assignments in Algorithms and
        Data Structures courses. Moreover, built university project for a <b>desktop application</b> using Java and
        JavaFX.
      </>
    ),
  },
  {
    id: "sql",
    icon: <TbSql />,
    name: "SQL",
    description: (
      <>
        Learned SQL by primarily using <b>PostgreSQL databases</b> for various university projects, as well as by
        completing Databases courses at the university.
      </>
    ),
  },
  {
    id: "html-css",
    icon: <FaHtml5 />,
    name: "HTML & CSS",
    description: (
      <>
        Built projects at the university with HTML, CSS and PHP, learned to create basic <b>responsive design</b> using
        CSS.
      </>
    ),
  },
  {
    id: "kotlin",
    icon: <SiKotlin />,
    name: "Kotlin",
    description: (
      <>
        Learned Kotlin at the university by creating mobile <b>Android</b> appliction with Kotlin <b>coroutines</b> and{" "}
        <b>Jetpack Compose</b>.
      </>
    ),
  },
  {
    id: "python",
    icon: <FaPython />,
    name: "Python",
    description: (
      <>
        Learned Python through taking Data Mining course at the university and using various python libraries to
        visualize & modify the data and create machine learning models{" "}
        <b>(Numpy, Pandas, Seaborn, Matplotlib, Altair, Scikit-learn, TensorFlow and Keras)</b>.
      </>
    ),
  },
  {
    id: "c",
    icon: <FaC />,
    name: "C",
    description: (
      <>
        Learned C at the university through various practical assignments. Learned to manage memory and implement some
        CPU scheduling algorithms (FCFS, SJF, SRTF, RR) using C language.
      </>
    ),
  },
  {
    id: "lua",
    icon: <SiLua />,
    name: "Lua",
    description: (
      <>
        Learned basics of Lua while creating a personal custom simple Neovim configuration. For more information, check
        the{" "}
        <a href="https://github.com/uktveris/nvim-config" target="_blank">
          config repository
        </a>
        .
      </>
    ),
  },
  {
    id: "go",
    icon: <FaGolang />,
    name: "Go",
    description: (
      <>Recently started learning Go with plans to later applying it in building / rebuilding website backends.</>
    ),
  },
];

interface Skill {
  id: string;
  icon: JSX.Element;
  name: string;
  description: JSX.Element;
}

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<null | Skill>(null);

  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSkill]);

  return (
    <section id="skills">
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          {skillList.map((skill) => (
            <div key={skill.id} className={styles.skill} onClick={() => setSelectedSkill(skill)}>
              {skill.icon}
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
      {selectedSkill && <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />}
    </section>
  );
}

interface SkillModalProps {
  skill: {
    id: string;
    icon: JSX.Element;
    name: string;
    description: JSX.Element;
  };
  onClose: () => void;
}

function SkillModal({ skill, onClose }: SkillModalProps) {
  return (
    <div className={styles.skillModalOverlay}>
      <div className={styles.skillModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.skillModalIcon}>{skill.icon}</div>
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
        <button className={styles.skillModalCloseButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
