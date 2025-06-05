import styles from "./styles.module.css";

export function Sidebar({ isOpen, toggleSidebar,}: { isOpen: boolean, toggleSidebar: () => void;}) {
    return (
        <nav className={`${styles.sidebarContainer} ${isOpen ? styles.open : styles.hidden}`}>
            <ul className={styles.sidebar}>
                <li><button onClick={toggleSidebar}>Close</button></li>
                <li><a onClick={toggleSidebar} href="#home">Home</a></li>
                <li><a onClick={toggleSidebar} href="#education">Education</a></li>
                <li><a onClick={toggleSidebar} href="#projects">Projects</a></li>
                <li><a onClick={toggleSidebar} href="#skills">Skills</a></li>
                <li><a onClick={toggleSidebar} href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
