import React from "react";
import Course from "./Course";
import { graphql, useStaticQuery } from "gatsby";
import styles from "../../css/courses.module.css";
import Title from "../Title";

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }) {
      nodes {
        title
        url
        technologies
        published
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
`;

const Courses = () => {
    const {allStrapiCourse: {nodes:courses}}= useStaticQuery(query)
    // console.log(courses)
    
    // const data = useStaticQuery(query)
    // console.log(data)
    // console.log(data.allStrapiCourse.nodes)

    return (
        <section className={styles.courses}>
            <Title title="all" subtitle="projects"></Title>
            <div className={styles.center}>
                {
                    courses.map(item => {
                        return <Course key={item.id} {...item}></Course>
                    })
                }
            </div>
        </section>
    )
};

export default Courses;
