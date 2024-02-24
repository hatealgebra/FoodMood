'use client';
import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // set initial value ofr window size
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return windowSize;
};

export default useWindowSize;
