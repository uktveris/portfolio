import styles from './styles.module.css'
import { educations } from '../dataStorage'
import { EduCard } from './EduCard'

export function Education() {
    return (
        <section id='education'>
            <div className={styles.eduContainer}>
                <h2>Education</h2>
                <div className={styles.educations}>
                    { educations.map((e, index) => (
                        <EduCard key={index} name={e.name} degree={e.degree} desc={e.desc} link={e.link}/>
                    ))}
                </div>
            </div>
        </section>
    )
}