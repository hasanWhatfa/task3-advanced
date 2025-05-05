import OurBenefitsCard from '../OurBenefitsCard/OurBenefitsCard'
import TitleComponent from '../TitleComponent/TitleComponent'
import './AwardsCompo.css'
import { awardsData } from '../../data/awardsData'
import { useState } from 'react'
import {handleNext,handlePrev} from '../../components/carouselControls'

const AwardsCompo = () => {

    const [displayIndex,setDisplayIndex] = useState(0);
  return (
    <section className='awardSection'>
        <TitleComponent qauote='Our Achievements'
        sectionTitle="Our Awards and Recognitions" 
        dscr="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
        <div className="awardsContentContainer">
            <div className="awardsContainer">
            {Array.from({ length: 3 }).map((_, idx) => {
                    const realIndex = (displayIndex + idx) % awardsData.length;
                    const item = awardsData[realIndex];
                    return (
                        <OurBenefitsCard 
                        key={realIndex}
                        title={item.title}
                        img={item.img}
                        desc={item.text}
                        />
                        );
                    })}
            </div>
            <div className="bottomAwardsSection">
                <div className="awardsBtns">
                    <button onClick={()=>handlePrev(awardsData,setDisplayIndex)}>
                        <img src="/assets/icons/arrowLeft.svg"/>
                    </button>
                    <button onClick={()=>handleNext(awardsData,setDisplayIndex)}>
                        <img src="/assets/icons/arrowRight.svg"/>
                    </button>
                </div>
                <p>8 More Awards</p>
            </div>
        </div>

    </section>
  )
}

export default AwardsCompo
