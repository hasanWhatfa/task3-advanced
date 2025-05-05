import MissionVissionCard from '../MissionVissionCard/MissionVissionCard'
import TitleComponent from '../TitleComponent/TitleComponent'
import './MissionVission.css'
import { missionVissionData } from '../../data/missionVissionData'
const MissionVission = () => {
  return (
    <section className='MissionVission'>
        <TitleComponent qauote='Mission & Visions' 
        sectionTitle='Our Mission & Visions' 
        dscr="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        />
        <div className="missionVissionContainer">
          {missionVissionData?.map(
            (d,i)=>{
              return(
                <MissionVissionCard img={d.img} title={d.title} text={d.text} key={i}/>
              )
            }
          )}
        </div>
    </section>
  )
}

export default MissionVission
