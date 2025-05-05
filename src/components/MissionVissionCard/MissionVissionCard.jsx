import './MissionVissionCard.css'

const MissionVissionCard = ({img,title,text}) => {
  return (
    <div className='mvCard' data-aos="zoom-in-down" data-aos-duration="800">
      <div className="mvCHeader"  data-aos="zoom-in-down" data-aos-duration="800">
        <h3>
            {title}
        </h3>
        <img src={img} alt="icon" />
      </div>
      <p className="mvPara"  data-aos="zoom-in" data-aos-duration="800">
        {text}
      </p>
    </div>
  )
}

export default MissionVissionCard
