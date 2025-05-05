import HeroTwo from '../../components/HeroTwo/HeroTwo'
import {heroTowData} from '../../data/heroTwoData'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import MissionVission from '../../components/MissionVission/MissionVission'
import AwardsCompo from '../../components/AwardsCompo/AwardsCompo'
import OurHistory from '../../components/OurHistory/OurHistory'
import OurTeam from '../../components/OurTeam/OurTeam'
const About = () => {

  return (
    <>
    <HeroTwo data={heroTowData[0]}/>
    <ContentWrapper>
      <MissionVission />
      <AwardsCompo />
      <OurHistory />
      <OurTeam />
    </ContentWrapper>

    </>
  )
}

export default About
