import React from "react"
import { Link } from "gatsby"
import logo from "../images/kadin dogum.png"
import styles from "../css/navbar.module.css"
import links from "../constants/Links"
import icons from "../constants/SocialLinks"
import { FaAlignRight } from "react-icons/fa"
import { AppContext } from "../context"
const Navbar = () => {
  const { size, handleOpenSidebar, height } = React.useContext(AppContext)

  if (size > 992) {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.center}>
          <div style={{display: "flex", alignItems: "center"}}>
          <Link to="/">
            <img className={styles.logo}src={logo} alt="Op. Dr. Kubilay Dündar Logo"></img>
          </Link>
          <Link to="/">
            <div className={styles.kubiLogo}><span className={styles.opdr}>Op. Dr. </span>Kubilay Dündar</div>
          </Link>
          </div>
          <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className={styles.navLink}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          
        </div>
      </nav>
    )
  } else {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.header}>
          <div style={{display: "flex", alignItems: "center"}}>

          <img className={styles.logo} src={logo} alt="koray dündar"></img>
          <Link to="/">
            <div className={styles.kubiLogo}><em><span className={styles.opdr}>Op. Dr. </span>Kubilay Dündar</em></div>
          </Link>
          </div>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleOpenSidebar}
          >
            <FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      </nav>
    )
  }
}

export default Navbar
