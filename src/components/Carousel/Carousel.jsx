import React, { useState } from 'react'
import './Carousel.css'
import CarouselCard from '../CarouselCard/CarouselCard'
import {carouselCardsData} from '../../data/carouselCardsData'
import { handleNext,handlePrev } from '../carouselControls'
const Carousel = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
  return (
    <div className='CarouselContainer'>
        <button className='preBtn' onClick={()=>handlePrev(carouselCardsData,setCurrentIndex)} >
            <img src="/assets/icons/arrowLeft.svg"/>
        </button>
        <div className="caroselCardContainer">
            {Array.from({ length: 3 }).map((_, idx) => {
                const realIndex = (currentIndex + idx) % carouselCardsData.length;
                const item = carouselCardsData[realIndex];
                return (
                    <CarouselCard 
                        key={realIndex}
                        img={item.img}
                        name={item.name}
                        comment={item.comment}
                    />
                        );
                 })}
        </div>
        <button className='nextBtn' onClick={()=>handleNext(carouselCardsData,setCurrentIndex)} >
            <img src="/assets/icons/arrowRight.svg"/>
        </button>
    </div>
  )
}

export default Carousel
