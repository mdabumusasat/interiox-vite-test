import { useEffect, useState } from 'react';

function BackToTop({ className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Only render button when visible
  return (
    isVisible && (
  <div className={`scroll-to-top scroll-to-target ${className}`} onClick={scrollToTop}><span className="fa fa-angle-up"></span></div>
    )
  );
}

export default BackToTop;