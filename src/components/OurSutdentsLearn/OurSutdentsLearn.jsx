import './OurSutdentsLearn.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import StudentCard from '../StudentCard/StudentCard'
import { ourStudentData } from '../../data/ourStudentsData'
import sliceArray from '../sliceArray'
const OurSutdentsLearn = () => {
    const rows=sliceArray(ourStudentData,3);
  return (
    <section className='ourStdLearn'>
      <TitleComponent
      qauote={'Our Features'}
      sectionTitle={'What Students Learn'}
      dscr={"At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include."}
      />
      <div className="ourStudentsMainContainer">
        {rows.map((row,rowIndex)=>{
            return(
                <div className="ourStudentsRow" key={rowIndex}>
                    {row.map((card,cardIndex)=>{
                        return(
                            <StudentCard key={cardIndex} img={card.img} text={card.text} title={card.title}/>
                        )
                    })}
                </div>
            )
        })}
      </div>
    </section>
  )
}
// ourStudentsRow
export default OurSutdentsLearn
