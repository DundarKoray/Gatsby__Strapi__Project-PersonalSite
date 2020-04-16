import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import LatestCourses from '../components/Home/LatestCourses'
import AboutMe from '../components/Home/AboutMe'
import Services from '../components/Home/Services'
import Contact from '../components/Home/Contact'

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Services></Services>
    <AboutMe></AboutMe>
    <Contact></Contact>
    {/* <LatestCourses></LatestCourses> */}
  </Layout>
)

export default IndexPage
