import HeroCalcsCompo from '../HeroCalcsCompo/HeroCalcsCompo'
import {heroCalcsData} from '../../data/heroData'
import './HeroComponent.css'
const HeroComponent = () => {
  return (
    <section className='Hero'>
      <img src="./assets/images/heroMainImage.png" className='MainHeroImage' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000"/>
      <div className="heroTextContainer" data-aos="fade-left">
        <p className='WelcomeSen'>Welcome to Little Learners Academy</p>
        <h2>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h2>
        <p className='HeroDesc'>Our kinder garden school provides a nurturing and stimulating environment,fostering 
            a love for learning that lasts a lifetime. 
            Join us as we embark on an exciting educational journey together!
        </p>
        <div className="heroClacsContainer">
            {heroCalcsData?.map(
                (item , index)=>{
                    return(
                        <>
                        <HeroCalcsCompo key={index} number={item.number} text={item.text}/>
                        <span className='line' key={index}></span>
                        </>
                    )
                }
            )}
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
