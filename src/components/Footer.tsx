import styles from "./styles.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

export function Footer() {
    return (
        <section id="contact">
            <div className={styles.footer}>
                <h3>Contact information</h3>
                <div className={styles.footerLinks}>
                    <div>
                        <a href="https://www.linkedin.com/in/marius-uktveris-1261221a8/" target="_blank"><FaLinkedin size={40}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/mariusuktveris" target="_blank"><FaGithub size={40} /></a>
                    </div>
                    <div>
                        <a href="https://x.com/mariusUktveris" target="_blank"><FaXTwitter size={40} /></a>
                    </div>
                    <div>
                        <a href="https://discord.com/users/610849105140252702" target="_blank"><FaDiscord size={40} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
