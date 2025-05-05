import './OurHistory.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import HistoryCard from '../HistoryCard/HistoryCard'
import { useRef, useState } from 'react'

const OurHistory = () => {
  const card = useRef();
  const [cardHoverd,setCardHoverd] = useState(false);
  const data =[
    {
      year:'2023',title:'Resilience and Future Horizons',
      description:"Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
      year:'2017',title:'Innovation and Technology',
      description:"Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
    },
    {
      year:'2012',title:'Expansion and Recognition',
      description:"These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
    },
    {
      year:'2005',title:'Inception and Growth',
      description:"Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
    }
  ]
  return (
    <section className='ourHistroySection'> 
        <TitleComponent qauote={'Our Progressive Journey'}
            sectionTitle={'Our History'}
            dscr='Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment'
            />
            <div className="ourHistoryMainContaier">
                <div className="cardsContainer">
                  {
                    data.map(
                      (item,index) =>{
                        return(
                          <HistoryCard 
                          cardHoverd={cardHoverd}
                          setCardHoverd={setCardHoverd}
                          ref={card} 
                          key={index} 
                          title={item.title} 
                          description={item.description} 
                          year={item.year}/>
                        )
                      }
                    )
                  }
                </div>
                <div className="thatAnnoyingShape">
                    <div className="orangeVline"></div>
                </div>
            </div>
    </section>
  )
}

export default OurHistory
