import './OurBenefitsCard.css'
const OurBenefitsCard = ({img,title,desc}) => {
  return (
    <div className='ourBenefitsCard' data-aos="flip-left" data-aos-easing="linear">
      <div className="iconConainer">
        <div className="ourBenefitsIcon">
          <img src={img} alt="" />
        </div>
      </div>
      <h3 className="cardHeading">
        {title}
      </h3>
      <p className="cardDescription">
        {desc}
      </p>
    </div>
  )
}

export default OurBenefitsCard
// <HiLifebuoy />
// import { HiLifebuoy } from "react-icons/hi2";
