import React from 'react'
import './FooterLinks.css'
import { useNavigate } from 'react-router-dom'
const FooterLinks = ({title,links,linkTo}) => {
    const navigate = useNavigate()
  return (
    <div className="FooterLinksContainer">
        <h4>{title}</h4>
        <div className="Links">
            {links?.map(
                (link,linkIndex)=>{
                    return(
                        <a key={linkIndex} onClick={()=>navigate(`/${title}`)}>{link.linkName}</a>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default FooterLinks
