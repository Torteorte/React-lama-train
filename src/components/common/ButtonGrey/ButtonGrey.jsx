import styles from './ButtonGrey.module.css'

const ButtonGrey = (props) => {
   return (
      <button onClick={props.onClick} className={styles.buttonGrey}>{props.textButton}</button>
   )
}

export default ButtonGrey