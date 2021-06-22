import facebook from './../../../../assets/img/facebook.svg'
import vk from './../../../../assets/img/vk.svg'
import twitter from './../../../../assets/img/twitter.svg'
import instagram from './../../../../assets/img/instagram.svg'
import youtube from './../../../../assets/img/youtube.svg'
import github from './../../../../assets/img/github.svg'
import styles from "./../ProfileInfo.module.css";

const Contacts = (props) => {

   return <div className={styles.contacts}>
      <a href={props.contacts.facebook} > <img src={facebook} alt="facebook-link" /></a >
      <a href={props.contacts.vk}><img src={vk} alt="vk-link" /></a>
      <a href={props.contacts.twitter}><img src={twitter} alt="twitter-link" /></a>
      <a href={props.contacts.instagram}><img src={instagram} alt="instagram-link" /></a>
      <a href={props.contacts.youtube}><img src={youtube} alt="youtube-link" /></a>
      <a href={props.contacts.github}><img src={github} alt="github-link" /></a>
   </div>
}

export default Contacts