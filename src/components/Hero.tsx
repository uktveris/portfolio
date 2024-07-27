import styles from './styles.module.css'
import profileImg from '../assets/newProfileImgCropped.jpg'

export function Hero() {
    return (
            <div className={styles.hero}>
                <p className={styles.personalInfo}>
                    My name is Marius Uktveris, I am studying a Bachelor of Science in Information Technology. I am keen on programming in general, but in terms of web development, I am mostly interested in Back End related things. Also, I like learning about data science - from data processing and visualization to machine learning. Apart from my passion for technology, I make music, do sports and like to cook sometimes.
                </p>
                <div className={styles.profileImgContainer}>
                    <img className={styles.profileImg} src={profileImg} alt='profileImg'/>
                </div>
            </div>
    )
}