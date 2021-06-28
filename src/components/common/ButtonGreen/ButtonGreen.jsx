import styles from './Buttons.module.css'

const ButtonGreen = (props) => {
   return (
      <div>
         <button className={styles.buttonGreen}>{props.textButton}</button>
      </div>
   )
}

export default ButtonGreen