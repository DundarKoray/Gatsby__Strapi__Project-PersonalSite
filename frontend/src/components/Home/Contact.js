import React from "react";
import Image from "gatsby-image";
import Title from "../Title";
import icons from "../../constants/SocialLinks";
import styles from "../../css/services.module.css";
import MapContainer from "./MapContainer";

import { useStaticQuery } from "gatsby";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "contact.jpg" }) {
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
      <Title subtitle="Iletisim"></Title>
      <div className={styles.center}>
        <div className={styles.mapBox}>
          <MapContainer />
        </div>
        <div className={styles.servicesBox}>
          <h1>Randevu almak icin;</h1>
          <h3>Telefon: </h3>
          <p>0 386 213 45 24</p>
          <h3>Adres: </h3>
          <p>Ahi Evran Cad. Agah Apt. B Blok No: 3 - KIRŞEHİR</p>
          <h3>Calisma Saatleri: </h3>
          <p>
            Hafta içi her gün 09:00 - 17:30 arası <br />
            Cumartesi 09:00 - 15:00 arası <br />
            Pazar günleri kapalıyız.
          </p>
          <h3>Sosyal Medya:</h3>

          {icons.map((item) => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.image}
              </a>
            );
          })}
          <div className={styles.contact}>
          {/* <Image className={styles.ultrasound} fluid={data.placeholderImage.childImageSharp.fluid}></Image> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
