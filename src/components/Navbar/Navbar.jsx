import './Navbar.css'
import HeaderNav from "../HeaderNav/HeaderNav";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = (props) => {
  const {data , companyName} = props;
  const [scrolling,setScrolling] = useState(false);
  const [activeLink , setActiveLink] = useState('Home');
  const [showMenu,setShowmenu] = useState(false);
  const location = useLocation();
  // track the scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


//  save the active link even if the page is reloded(design problem)
useEffect(() => {
  const currentLink = data.find((link) => {
    return(
     link.linkPath === location.pathname
    )
  });
  if (currentLink) {
    setActiveLink(currentLink.linkName);
  }
}, [location.pathname, data]);
  return (
    <header>
    <HeaderNav scrolling={scrolling} sentenct="Admission is Open, Grab your seat now"/>
    <nav className={`bgScreenNav ${scrolling ? 'navBarSroll' : ''}`}>{/*add some animation when
    the navBar come back to it's original place*/}
      <div className="navContent">
        <h1 className='logoConatiner'>
          <img src="./assets/icons/logoAbstract.svg" alt="logo" /> {companyName}
        </h1>
        <ul className="navLinks">
          {
            data?.map((linkItem,linkIndex)=>{
              return(
                <li key={linkIndex} onClick={()=>setActiveLink(linkItem.linkName)} className={`${activeLink == linkItem.linkName ? 'activeNavLink': ""}`}>
                  <Link to={linkItem.linkPath}>
                    {linkItem.linkName}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>




    <nav className={`smScreenNav ${scrolling ? 'navBarSroll' : ''}`}>
      <div className="mobileNavContent">
        <h1 className='logoConatiner'>
            <img src="./assets/icons/logoAbstract.svg" alt="logo" /> Little Learners
        </h1>
        <ul className={`navLinksSm ${showMenu ? 'showMenuNav': ''}`}>
          <li className='closeIconNavSm' onClick={()=>setShowmenu(false)}><MdClose /></li>
          {
            data?.map((linkItem,linkIndex)=>{
              return(
                <li key={linkIndex} onClick={()=>setActiveLink(linkItem.linkName)} className={`${activeLink == linkItem.linkName ? 'activeNavLink': ""}`}>
                  <Link to={linkItem.linkPath}>
                    {linkItem.linkName }
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <button onClick={()=>setShowmenu(!showMenu)}>
          <HiOutlineBars3BottomRight />
        </button>
      </div>
    </nav>
    </header>
  )
}

export default Navbar
