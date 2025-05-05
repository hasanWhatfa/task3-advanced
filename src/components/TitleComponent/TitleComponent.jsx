import './TitleComponent.css'
const TitleComponent = ({qauote,sectionTitle,dscr}) => {
  return (
    <div className='TitleComp' data-aos="zoom-in" data-aos-duration="800">
      <p className="TitleQoute">
        {qauote}
      </p>
      <h2 className='SectionTitle'>
        {sectionTitle}
      </h2>
      <p className="TitleDesc">
        {dscr}
      </p>
    </div>
  )
}

export default TitleComponent
