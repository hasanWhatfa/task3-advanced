import { useState } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent'
import './Gallery.css'
import GalleryCard from '../GalleryCard/GalleryCard';
import { galleryCardData } from '../../data/galleryCardData';
const Gallery = () => {
    const [choosedCateg,setChoosedCateg] = useState('All');
    const gatergorize =['All','Classrooms','Library','Science Lab','Computer Lab','Garden and Nature Area'];
  return (
    <section className='gallery'>
      <TitleComponent 
      qauote="Our Gallery"
      sectionTitle='Our Rooms Gallery'
      dscr="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <div className="mainGallertContainer">
        <div className="tabsContainer">
            {gatergorize.map((item,index)=>{
                return(
                    <button 
                    key={index}
                    onClick={()=>setChoosedCateg(item)}
                    className={`${item ==  choosedCateg? 'activeCat':''}`}
                    data-aos="fade-right" data-aos-duration="800"
                    >{item}
                    </button> 
                )
            })}
        </div>

        {
            galleryCardData?.map((card,cardIndex)=>{
                if(card.filter == choosedCateg){
                return(
                    <GalleryCard 
                    key={cardIndex}
                    imgArr={card.imgsArr}
                    title={card.title}
                    text={card.text}
                    />
                )
                }else if(choosedCateg == "All"){
                    return(
                        <GalleryCard 
                        key={cardIndex}
                        imgArr={card.imgsArr}
                        title={card.title}
                        text={card.text}
                        />
                    )
                }
            })
        }
      </div>
    </section>
  )
}

export default Gallery
