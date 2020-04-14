import React from "react"
import logo from "../images/white-logo.webp"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img className={styles.logo} src={logo} alt="koray dündar logo"></img>
      </div>
      <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div>
      <div className={styles.info}>
        © {new Date().getFullYear()} Koray Dündar. All rights reserved. Built
        with
        <a href="https://www.gatsbyjs.org/" className={styles.link}>
          Gatsby
        </a>
         and
        <a href="https://strapi.io/" className={styles.link}>
          Strapi
        </a> 
      </div>
    </footer>
  )
}

export default Footer
