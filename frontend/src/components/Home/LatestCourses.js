import React from "react";
import Course from "../Courses/Course";
import { graphql, useStaticQuery, Link } from "gatsby";
import styles from "../../css/courses.module.css";
import Title from "../Title";

/* Add these above ...GatsbyImageSharpFluid_withWebp if cant get images
                sizes
                src
                srcSet
                srcWebp
                srcSetWebp
*/
const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC}, limit:6) {
      nodes {
        title
        url
        description
        technologies
        published
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
`;

const LatestCourses = () => {
    const {allStrapiCourse: {nodes:courses}}= useStaticQuery(query)
    console.log(courses)
    
    // const data = useStaticQuery(query)
    // console.log(data)
    // console.log(data.allStrapiCourse.nodes)

    return (
        <section className={styles.courses}>
            <Title title="my latest" subtitle="projects"></Title>
            <div className={styles.center}>
                {
                    courses.map(item => {
                        return <Course key={item.id} {...item}></Course>
                    })
                }
            </div>
            <Link to='/courses' className="btn-primary"> All Project</Link>
        </section>
    )
};

export default LatestCourses;
