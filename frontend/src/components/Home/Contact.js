import React from "react";
import Title from "../Title";
import icons from "../../constants/SocialLinks"
import styles from "../../css/aboutMe.css";


// import resim from "../../images/profil.jpg"
import Image from "gatsby-image";
import { useStaticQuery } from "gatsby";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profil.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section>
      <div className="container">
        <Title subtitle="Iletisim" />
        <div className="about-me-wrapper">
          {/* <div style={imgStyles} className="about_me_image"></div> */}
          <div className="about-me-text">
            <h1>Randevu almak icin;</h1>
            <h3>Telefon: </h3>
            <p>0 386 213 45 24</p>
            <h3>Adres: </h3>
            <p>Ahi Evran Cad. Agah Apt. B Blok No: 3 - KIRŞEHİR</p>
            <h3>Calisma Saatleri: </h3>
            <p>
              Hafta içi her gün 09:00 - 17:30 arası <br/>
              Cumartesi 09:00 - 15:00
              arası <br/>Pazar günleri kapalıyız.
            </p>
            <h3>Sosyal Medya</h3>
            
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
