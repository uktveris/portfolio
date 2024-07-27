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

export function Skills() {
    return (
        <section id='skills'>
            <div className={styles.skillsContainer}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <FaLinux/>
                        <h4>Linux</h4>
                    </div>
                    <div className={styles.skill}>
                        <FaGitAlt/>
                        <h4>Git</h4>
                    </div>
                    <div className={styles.skill}>
                        <FaNode/>
                        <h4>Node.js</h4>
                    </div>
                    <div className={styles.skill}>
                        <SiGnubash/>
                        <h4>Bash</h4>
                    </div>
                    <div className={styles.skill}>
                        <IoLogoJavascript/>
                        <h4>JavaScript/<br/>TypeScript</h4>
                    </div>
                    <div className={styles.skill}>
                        <FaJava/>
                        <h4>Java</h4>
                    </div>
                    <div className={styles.skill}>
                        <TbSql/>
                        <h4>SQL</h4>
                    </div>
                    <div className={styles.skill}>
                        <FaHtml5/>
                        <h4>HTML5 & CSS3</h4>
                    </div>
                    <div className={styles.skill}>
                        <SiKotlin/>
                        <h4>Kotlin</h4>
                    </div>
                    <div className={styles.skill}>
                        <FaPython/>
                        <h4>Python</h4>
                    </div>
                    <div className={styles.skill}>
                        <FaC/>
                        <h4>C</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}