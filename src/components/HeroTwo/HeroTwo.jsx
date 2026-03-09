import React from 'react'
import './HeroTwo.css'
const HeroTwo = ({data}) => {
  return (
    <section className='SubHero' data-aos="zoom-in-down" data-aos-duration="1000">
        <div className="subHeroContent">
            <div className="subHeroShapes">
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
                <img src="./assets/images/subHeroShapes.png" alt="some shapes" />
            </div>
            <div className="leftSideSubHero">
                <p className="smallText">
                    {data.sectionName}
                </p>
                <h2 className='subHeroTitle'>
                    {data.title}
                </h2>
            </div>
            <p className="rightSideSubHero">
                {data.desc}
            </p>
        </div>

    </section>
  )
}

export default HeroTwo
