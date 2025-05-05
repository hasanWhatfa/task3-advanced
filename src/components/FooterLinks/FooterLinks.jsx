import React from 'react'
import './FooterLinks.css'
const FooterLinks = ({title,links,linkTo}) => {
  return (
    <div className="FooterLinksContainer">
        <h4>{title}</h4>
        <div className="Links">
            {links?.map(
                (link,linkIndex)=>{
                    return(
                        <a href={`#${link.linkTo}`} key={linkIndex}>{link.linkName}</a>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default FooterLinks
