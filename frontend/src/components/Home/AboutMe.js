import React from "react";
import Title from "../Title";
import styles from "../../css/aboutMe.css";
// import resim from "../../images/profil.jpg"
import Image from "gatsby-image";
import { useStaticQuery } from "gatsby";

const AboutMe = () => {
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
        <Title subtitle="Hakkinda" />
        <div className="about-me-wrapper">
          <div className="about-me-text">
            <h1>Kubilay Dündar Kimdir?</h1>
            <p>
              Kubilay Dündar, Hacettepe Üniversitesi Tıp Fakültesi'nden 1979
              senesinde mezun olmuştur. İhtisasını Ankara Zekai Tahir Burak
              Kadın Hastanesi'nde 1984'te tamamlamıştır.
            </p>
            <p>
              40 senelik hekimlik geçmişinin büyük bir bölümünde Kırşehir'de
              görev yapmıştır. 1993 - 96 seneleri arasında Kırşehir İl Sağlık
              Müdürü ve Kırşehir Çocuk ve Kadın Hastalıkları Hastanesi Baş
              Hekimi olarak hizmet vermiştir.
            </p>
            <p>
              Uzun zamandır çalıştığı Kırşehir Eğitim ve Araştırma
              Hastanesi'ndeki Kadın Doğum Uzmanlığı görevinden 2019 yılının
              Nisan ayında emekliye ayrılmıştır.
            </p>
            <p>
              Mesleki hayatına ve değerli Kırşehir halkına hizmet vermeye bundan
              sonra Ahi Evran Caddesi üzerinde yer alan muayenehanesinde devam
              edecektir.
            </p>
          </div>
          <Image
            className="about_me_image"
            fluid={data.placeholderImage.childImageSharp.fluid}
            imgStyle={{ objectPosition: "center top" }}
          />
          {/* <div style={imgStyles} className="about_me_image"></div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
