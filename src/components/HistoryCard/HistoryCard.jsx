import './HistoryCard.css'


const HistoryCard = ({year,title,description,cardHoverd,setCardHoverd}) => {
  return (
    <div className='historyCard' onMouseOver={()=>setCardHoverd(true)}>
        <div className="histroycardLeft">
            <div className="leftShpe">
                <div className="circle"></div>
                <div className="orangeline">
                    <span></span>
                </div>
                <div className="circle"></div>
            </div>
            <div className="rightCardLeftSide"  data-aos="fade-up" data-aos-duration="800">
                <img src="/assets/images/historyShpe.png"/>
                <h3>{year}</h3>
            </div>
        </div>
        <div className="histroyCardRight" data-aos="zoom-in-right" data-aos-duration="800">
            <h4>{title}</h4>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default HistoryCard
