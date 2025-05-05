import './OurTeam.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard'
import sliceArray from '../sliceArray'
import { TeamMembersData } from '../../data/TeamMembersData'
const OurTeam = () => {
    const rows = sliceArray(TeamMembersData,2)
  return (
    <section className='ourTeamSection'>
        <TitleComponent 
        qauote={'Our Teachers With Experties'}
        sectionTitle={"Our Team Members"}
        dscr={"At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."}
        />
        <div className="ourTeamCardsMainC">
            {rows?.map((row,rowIndex)=>{
                return(
                    <div className="ourTeamRow" key={rowIndex}>
                        {row.map(
                            (member,memberIndex)=>{
                                return(
                                    <TeamMemberCard 
                                    key={memberIndex}
                                    name={member.name} 
                                    img={member.img} 
                                    qualification={member.qualification}
                                    talk={member.talk}
                                    />
                                )
                            }
                        )}
                    </div>
                )
            })}
        </div>
    </section>
  )
}
// ourTeamRow
export default OurTeam
