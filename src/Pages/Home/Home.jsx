import React, { useEffect } from 'react'
import OurBenefits from '../../components/OurBenefits/OurBenefits'
import ContentWrapper from '../../../../../task2/academy-project/src/components/ContentWrapper/ContentWrapper'
import HeroComponent from '../../../../../task2/academy-project/src/components/HeroComponent/HeroComponent'
import OurTestimonials from '../../../../../task2/academy-project/src/components/OurTestimonials/OurTestimonials'
import FAQ from '../../../../../task2/academy-project/src/components/FAQ/FAQ'
import NavigateCompo from '../../../../../task2/academy-project/src/components/NavigateCompo/NavigateCompo'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.refresh();
  }, []);
  return (
    <>
    <ContentWrapper>
      <HeroComponent />
      <OurBenefits />
      <OurTestimonials />
      <FAQ />
      <NavigateCompo />
    </ContentWrapper>
    </>
  )
}

export default Home
