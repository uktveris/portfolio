import styles from './styles.module.css'

interface Props {
    title: string,
    message: string
}

export function TextCard({title, message}: Props) {
    return (
        <div className={styles.textCard}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
}