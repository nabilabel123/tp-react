import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;
