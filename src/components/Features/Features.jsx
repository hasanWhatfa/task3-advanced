import './Features.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import OurBenefitsCard from '../OurBenefitsCard/OurBenefitsCard'
import sliceArray from '../sliceArray'
import {featuresData} from '../../data/featuresData'
const Features = () => {
    const rows = sliceArray(featuresData,3);
  return (
    <section className='features' id="features">
      <TitleComponent
        qauote={'Our Features'}
        sectionTitle={'Our Special Features'}
        dscr={'Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'}
        />
        <div className="mainFeaturesContainer">
            {rows.map((row,rowIndex)=>{
                return(
                    <div className="featuresRow" key={rowIndex}>
                        {
                            row.map((item,itemIndex)=>{
                                return(
                                    <OurBenefitsCard key={itemIndex} img={item.img} title={item.title} desc={item.dscr}/>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Features
