import styles from './styles.module.css'
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { useState } from 'react';

const skillList = [
    { 
        id: "linux", 
        icon: <FaLinux/>, 
        name: "Linux", 
        description: "Learned Linux by using multiple Linux distributions (EndevourOS, Linux Mint). Learned the file system, together with some terminal commands."
    },
    {
        id: "git",
        icon: <FaGitAlt/>,
        name: "Git",
        description: "Learned Git while building projects and using git as a primary version control system. Gained knowledge in basics such as pulling & pushing, merging, etc."
    },
    {
        id: "node",
        icon: <FaNode/>,
        name: "Node.js",
        description: "Built multiple projects with Node.js (Look into \"dahu\" and \"Cloud file sharing platform\" projects for more information."
    },
    {
        id: "bash",
        icon: <SiGnubash/>,
        name: "Bash",
        description: "Basic bash scripting knowledge, such as editing configuration files and writing basic bash scripts."
    },
    {
        id: "js-ts",
        icon: <IoLogoJavascript/>,
        name: "JS / TS",
        description: "Learned JavaScript / TypeScript while using React in the frontend, Express.js in the Backend projects. For more information, look into \"Cloud file sharing platform\" project."
    },
    {
        id: "java",
        icon: <FaJava/>,
        name: "Java",
        description: "Learned Java as a first language at university, using it to complete practical assignments in Algorithms and Data Structures courses. Moreover, built university project of desktop application using Java and JavaFX."
    },
    {
        id: "sql",
        icon: <TbSql/>,
        name: "SQL",
        description: "Learned SQL by primarily using PostgreSQL databases for various university projects, as well as by completing Databases courses at university."
    },
    {
        id: "html-css",
        icon: <FaHtml5 />,
        name: "HTML & CSS",
        description: "Built projects at university with HTML, CSS and PHP, learned to create responsive design using CSS."
    },
    {
        id: "kotlin",
        icon: <SiKotlin/>,
        name: "Kotlin",
        description: "Learned Kotlin at university by creating mobile Android appliction with Kotlin coroutines and Jetpack Compose."
    },
    {
        id: "python",
        icon: <FaPython/>,
        name: "Python",
        description: "Learned Python through taking Data Mining course at university and using various python libraries to visualize & modify the data and create machine learning models (Numpy, Pandas, Seaborn, Matplotlib, Altair, Scikit-learn, TensorFlow, Keras)."
    },
    {
        id: "c",
        icon: <FaC/>,
        name: "C",
        description: "Learned C at the university through various practical assignments. Learned to implement some CPU scheduling algorithms (FCFS, SJF, SRTF, RR) using C language."
    }
]


interface Skill {
    id: string;
    icon: JSX.Element;
    name: string;
    description: string;
}

export function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<null | Skill>(null);
    return (
        <section id='skills'>
            <div className={styles.skillsContainer}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                {skillList.map(skill => (
                    <div key={skill.id} className={styles.skill} onClick={() => setSelectedSkill(skill)}>
                    {skill.icon}
                    <h4>{skill.name}</h4>
                    </div>
                ))}
                </div>
            </div>
            {selectedSkill && (
                <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
            )}
        </section>
    )
}

interface SkillModalProps {
    skill: {
        id: string;
        icon: JSX.Element;
        name: string;
        description: string;
    };
    onClose: () => void;
}


function SkillModal({skill, onClose}: SkillModalProps) {
    return (
        <div className={styles.skillModalOverlay} >
            <div className={styles.skillModalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.skillModalIcon}>{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <button className={styles.skillModalCloseButton} onClick={onClose}>Close</button>
            </div>
        </div>
    )
}