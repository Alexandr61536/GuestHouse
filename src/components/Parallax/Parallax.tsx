import React, { ReactNode, useEffect, useRef } from 'react';
import './Parallax.css';

interface ParallaxProps {
  children: ReactNode;
  strength?: number;
  bgImage?: string;
  className?: string;
}

export const Parallax = ({
  children,
  strength = 50,
  bgImage = '/cherry-bg.jpg',
  className = ''
}: ParallaxProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollPosition = window.pageYOffset;
        const offset = bgRef.current.offsetTop;
        const height = bgRef.current.offsetHeight;
        
        if (scrollPosition > offset + height || offset > scrollPosition + window.innerHeight) {
          return;
        }

        bgRef.current.style.transform = `translateY(${
          (scrollPosition - offset) * (strength / 100)
        }px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);

  return (
    <div className={`parallax-container ${className}`}>
      <div 
        className="parallax-background" 
        ref={bgRef}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default Parallax;