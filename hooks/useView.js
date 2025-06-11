

import { useState, useEffect } from 'react';

export function useView() {
  // Initialize state with 0 (safe for SSR)
  const [view, setView] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setView(window.innerWidth);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); 

  return {
    view,
    md: view >= 768,
    sm: view >= 640,
    lg: view >= 1024,
  };
}