import './StudentCard.css'

const StudentCard = ({img,title,text}) => {
  return (
    <div className='studentCard'>
      <div className="imgContainer" data-aos-duration="800" data-aos="zoom-in-down">
        <img src={img} alt="image" />
      </div>
      <div className="studentCardText" data-aos="zoom-in-right"  data-aos-duration="800">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="studentCardBgShape"></div>
    </div>
  )
}

export default StudentCard
