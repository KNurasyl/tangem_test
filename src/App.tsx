import React, {useState, useEffect} from 'react';
import { HeadBanner } from './components/HeadBanner/HeadBanner';
import { CardBanner } from './components/CardBanner/CardBanner';
import "./styles/App.scss";


export const App = () => {
  const [showCardBanner, setShowCardBanner] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const headBannerElement: any = document.querySelector('.HeadBanner');
  
      if (headBannerElement) {
        const headBannerHeight = headBannerElement.offsetHeight;
        const scrollPosition = window.scrollY;
  
        setShowCardBanner(scrollPosition > headBannerHeight);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className='App'>
        <HeadBanner/>
        {showCardBanner && <CardBanner />}
    </div>
  );
};