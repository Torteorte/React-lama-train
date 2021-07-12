import styles from './ButtonGreen.module.css'

const ButtonGreen = (props) => {
   return (
      <div>
         <button className={styles.buttonGreen}>{props.textButton}</button>
      </div>
   )
}

export default ButtonGreen