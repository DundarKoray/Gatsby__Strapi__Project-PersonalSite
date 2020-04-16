import React from "react"
import logo from "../images/white-logo.webp"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        
      </div>
      {/* <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div> */}
      <div className={styles.info}>
        © {new Date().getFullYear()} Op. Dr. Kubilay Dündar - Kadın Hastalıkları ve Doğum Uzmanı - KIRŞEHİR
        
      </div>
    </footer>
  )
}

export default Footer
