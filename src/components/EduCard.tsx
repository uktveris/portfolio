import styles from './styles.module.css'

export function EduCard({name, degree, desc, link}: {name: string, degree: string, desc: string, link: string}) {
    return (
        <div className={styles.eduCard}>
            <h3>{name}</h3>
            <h4>{degree}</h4>
            <p>{desc}</p>
            <a className={styles.eduLink} href={link} target='_blank'>Visit website</a>
        </div>
    )
}