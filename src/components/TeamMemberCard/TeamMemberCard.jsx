import './TeamMemberCard.css'

const TeamMemberCard = ({img,name,qualification,talk}) => {
  return (
    <div className='teamMemberCard' data-aos="flip-left" data-aos-duration="800">
      <div className="memberCardHeading">
        <div className="memberInfo">
            <img src={img} alt="employee image" />
            <h3>{name}</h3>
        </div>
        <a className="memberIcon" href={`mailto:${name}@gmail.com`}>
            <img src="./assets/icons/envelope.svg"/>
        </a>
      </div>
      <div className="memberCardText">
        <h4>{qualification}</h4>
        <p>
            {talk}
        </p>
      </div>
    </div>
  )
}

export default TeamMemberCard
