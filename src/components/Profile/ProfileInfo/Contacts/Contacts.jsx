import facebook from './../../../../assets/img/facebook.svg'
import vk from './../../../../assets/img/vk.svg'
import twitter from './../../../../assets/img/twitter.svg'
import instagram from './../../../../assets/img/instagram.svg'
import youtube from './../../../../assets/img/youtube.svg'
import github from './../../../../assets/img/github.svg'
import styles from "./../ProfileInfo.module.css";

const Contacts = (props) => {

   let isContact = (propsSocial, social) => {
      return (propsSocial && <a target="_blank" rel="noreferrer" href={propsSocial} > <img src={social} alt={`${social}-link`} /></a >)
   }

   return <div className={styles.contacts}>
      {isContact(props.contacts.facebook, facebook)}
      {isContact(props.contacts.vk, vk)}
      {isContact(props.contacts.twitter, twitter)}
      {isContact(props.contacts.instagram, instagram)}
      {isContact(props.contacts.youtube, youtube)}
      {isContact(props.contacts.github, github)}
   </div>
}

export default Contacts