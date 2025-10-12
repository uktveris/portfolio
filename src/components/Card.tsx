import styles from "./styles.module.css";

function Card({
  title,
  desc,
  technologies,
  link,
}: {
  title: string;
  desc: string;
  technologies: string[];
  link: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <h3 className={styles.projectCardName}>{title}</h3>
      <p className={styles.projectCardDesc}>{desc}</p>
      <a className={styles.projectLink} href={link} target="_blank">
        Visit project
      </a>
    </div>
  );
}

export default Card;
