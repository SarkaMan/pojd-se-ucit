import React, { useEffect, useState } from 'react';

export const ScrollImage = ({ imageUrl }) => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const fadeStart = 100; // Začněte mizet po 50px skrolování
    const fadeEnd = 300; // Úplně zmizí po 300px skrolování

    if (scrollY < fadeStart) {
      setOpacity(1);
    } else if (scrollY > fadeEnd) {
      setOpacity(0);
    } else {
      setOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
      className="h-64 bg-cover bg-center bg-no-repeat transition-opacity duration-500 mt-5"
      style={{ backgroundImage: `url(${imageUrl})`, opacity }}>
      </div>
      <div className='mt-10'/>
    </>
  );
};
