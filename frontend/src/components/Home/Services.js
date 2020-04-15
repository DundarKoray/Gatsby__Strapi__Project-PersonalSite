import React from 'react';
import Title from "../Title";
import styles from "../../css/services.module.css";
import Image from "gatsby-image"
import { useStaticQuery } from "gatsby"

const Services = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Orijinal P1160695.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `) 
    return (
        <section>
            <Title subtitle="Servisler"></Title>
            <div className={styles.center}>
            <Image className={styles.ultrasound} fluid={data.placeholderImage.childImageSharp.fluid} />
            <div>
            <h2>Kirsehirdeki özel klinigime hosgeldiniz!</h2>

            <p>We’re glad you hand your dental health concerns to our skilled hands. We’ll make sure to deliver the best possible healthcare to all our patients! Of course, we always complement our main services with a customer service oriented approach.</p>
            <p>We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and adult customers! Also we implement a lot of pain management and anesthesia options.Everything we do is aimed at making you feel comfortable, while we take care of your oral healthcare!</p>
            <p>It includes both local anesthesia for mouth-numbing as well as a sedative anesthesia. Altogether, this helps relief any pain which might occur in the process of treatment. All in all, we’ve got it all under control at our BeDentist dental health clinic.</p>
            <p>We invite you to explore the information about our dental office on our website! Feel free to read our terms and conditions and all the additional info we have posted here.</p>
            <p>Once our customer, you will be leaving our dental clinic with a bright, wide smile!</p>
            </div>
            </div>
        </section>
    );
};

export default Services;