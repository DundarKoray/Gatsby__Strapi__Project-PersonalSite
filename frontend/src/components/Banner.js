import React from "react"
import styles from "../css/banner.module.css"
const Banner = ({ title, subtitle, subtitle2, children }) => {
  return (
    <div className={styles.banner}>
      <h1> <span className={styles.title}>{title}</span><span className={styles.subtitle}>{subtitle}</span> </h1>
      <h2 className={styles.subtitle2}>{subtitle2}</h2>
      {children}
      <div style={{textAlign: "center"}}>
        <a className="btn-primary">Randevu Al</a>
      </div>
    </div>
  )
}

export default Banner
