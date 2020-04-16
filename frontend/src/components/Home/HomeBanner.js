import React from "react"
import { AppContext } from "../../context/context"
import SmallBanner from "./SmallBanner"
import Banner from "../Banner"
import Background from "./Background"
const HomeBanner = () => {
  const { size } = React.useContext(AppContext)
  if (size > 490 && size < 992) {
    return (
      <SmallBanner>
        <Banner title="Op.Dr. " subtitle="Kubilay Dündar" subtitle2="Kadın Hastalıkları ve Doğum Uzmanı"></Banner>
      </SmallBanner>
    )
  } else if(size < 490){
    return(
      <SmallBanner>
        <Banner subtitle2="Kadın Hastalıkları ve Doğum Uzmanı"></Banner>
      </SmallBanner>
    )
  }
  return (
    <Background>
       <Banner title="Op.Dr. " subtitle="Kubilay Dündar" subtitle2="Kadın Hastalıkları ve Doğum Uzmanı"></Banner>
    </Background>
  )
}

export default HomeBanner
