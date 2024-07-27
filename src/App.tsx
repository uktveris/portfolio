import styles from "./appStyles.module.css";
import { NavBar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
	return (
		<div className={styles.container}>
			<NavBar />
			<div className={styles.content}>
			<section id='home'>
				<h1 className={styles.mainHeading}>Welcome to my portfolio.</h1>
			</section>
				<Hero/>
				<Education/>
				<Projects/>
				<Skills/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
