import Card from './Card'
import styles from './styles.module.css'

const projects: {title: string, desc: string, technologies: string[], link: string}[] = [
    {
        "title": 'dahu',
        "desc": 'Dahu is a color theme extension for Visual Studio Code. It allows users to generate color themes from an image, set colors for background and code syntax manually.',
        // "imgPath": '../assets/AstronautWP.jpg.jpg',
        "technologies": ['TypeScript', 'Node.js', 'Angular'],
        "link": 'https://github.com/dahu-theme-generator/dahu'
    },
    // {
    //     "title": 'Social media app',
    //     "desc": 'A simple mobile application which allows users to take photos, post them and follow other users.',
    //     // "imgPath": '../assets/AstronautWP.jpg.jpg',
    //     "technologies": ['TypeScript', 'Kotlin', 'Node.js', 'PostgreSQL'],
    //     "link": 'https://github.com/FontysVenlo/prj3-2023-android-09'
    // },
    // {
    //     "title": 'Airline Information System',
    //     "desc": 'A desktop application that simulates an airline information service. Allows users to add, remove and book flights, checks weather conditions on the flight destination.',
    //     // "imgPath": '../assets/AstronautWP.jpg.jpg',
    //     "technologies": ['Java', 'JavaFX', 'PostgreSQL'],
    //     "link": 'https://github.com/FontysVenlo/prj2-2023-prj2-2023-13'
    // }
]

export function Projects() {
    return (
        <section id='projects'>
            <div className={styles.projectsContainer}>
                <h2>Projects</h2>
                <div className={styles.projects}>
                    {projects.map((project, index) => (
                        <Card key={index} title={project.title} desc={project.desc} technologies={project.technologies} link={project.link}/>
                    ))}
                </div>
            </div>
        </section>
    )
}