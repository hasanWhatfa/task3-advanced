import './GalleryCard.css'
import {handleNext,handlePrev} from '../carouselControls'
import { useState } from 'react'

const GalleryCard = ({imgArr,title,text}) => {
    const [dIndex,setDIndex] = useState(0);
  return (
    <div className='galleryCard'>
      <div className="galleryImgContainer">
        {Array.from({ length: 4 }).map((_, idx) => {
            const realIndex = (dIndex + idx) % imgArr.length;
            const item = imgArr[realIndex];
            return (
                <img src={item} key={idx} data-aos="flip-right" data-aos-duration="800"/>
                );
            })}
      </div>
      <div className="galleryCardHeading">
        <h3 data-aos="fade-right" data-aos-duration="800">{title}</h3>
        <div className="btnsContainer">
            <button onClick={()=>handlePrev(imgArr,setDIndex)}><img src="./assets/icons/arrowLeft.svg"/></button>
            <button onClick={()=>handleNext(imgArr,setDIndex)}><img src="./assets/icons/arrowRight.svg"/></button>
        </div>
      </div>
      <p className="galleryCardText"
      data-aos="fade-right" data-aos-duration="800">
        {text}
      </p>
    </div>
  )
}

export default GalleryCard
