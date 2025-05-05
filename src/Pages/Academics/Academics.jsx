import ContentWrapper from "../../components/ContentWrapper/ContentWrapper"
import Features from "../../components/Features/Features"
import Gallery from "../../components/Gallery/Gallery"
import HeroTwo from "../../components/HeroTwo/HeroTwo"
import OurSutdentsLearn from "../../components/OurSutdentsLearn/OurSutdentsLearn"
import { heroTowData } from "../../data/heroTwoData"
const Academics = () => {
  return (
    <>
      <HeroTwo data={heroTowData[1]}/>
      <ContentWrapper>
        <Features />
        <OurSutdentsLearn />
        <Gallery />
      </ContentWrapper>
    </>
  )
}

export default Academics
