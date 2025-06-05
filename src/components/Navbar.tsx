import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Sidebar } from './Sidebar';
import { CiMenuBurger } from 'react-icons/ci';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    
    
    useEffect(() => {
        const closeSidebar = () => {
            if (window.innerWidth > 800 && isOpen) {
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', closeSidebar);

        closeSidebar();

        return () => {
            window.removeEventListener('resize', closeSidebar);
        };
    }, [isOpen]);
    
    return (
        <div>
            <nav className={styles.navigationBar}>
                <ul className={styles.navbar}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li className={styles.burgerMenu} onClick={toggleSidebar}><CiMenuBurger size={25}/></li>
                </ul>
            </nav>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </div>
    )
}