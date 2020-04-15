import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import LatestCourses from '../components/Home/LatestCourses'
import AboutMe from '../components/Home/AboutMe'
import Services from '../components/Home/Services'

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Services></Services>
    <AboutMe></AboutMe>
    <LatestCourses></LatestCourses>
  </Layout>
)

export default IndexPage
