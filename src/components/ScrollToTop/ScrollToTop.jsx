import { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { IoIosArrowRoundUp } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`scrollToTopBtn ${isVisible ? 'showScrollBtn' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IoIosArrowRoundUp />
    </button>
  );
};

export default ScrollToTop;
