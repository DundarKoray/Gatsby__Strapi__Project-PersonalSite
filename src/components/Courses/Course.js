import React from 'react';
import styles from '../../css/single-course.module.css'
import Image from 'gatsby-image'
import logo from '../../images/addict-logo.svg'

const Course = ({title, url, technologies, description, image}) => {
    const mainImage = image.childImageSharp.fluid;
    console.log(mainImage)
    return (
        <article className={styles.course}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} alt={title} className={styles.img}></Image>
                <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">Click to see</a>
            </div>
            <div className={styles.footer}>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <br/>
                    <p>{technologies}</p><br/>
                    <details>
                        <summary>Learn more</summary>
                        <br/>
                        <p>{description}</p>
                    </details>
                    {/* <img src={logo} alt="coding addict logo"/> */}
                    
                </div>
            </div>
        </article>
    );
};

export default Course;      