import preloader from './../../../assets/img/circles.svg'
import styles from "./Preloader.module.css";

const Preloader = () => {
   return <img className={styles.Preloader} src={preloader} alt="preload" />
}

export default Preloader