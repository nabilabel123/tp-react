import { useEffect } from "react";

export default function useIntersectionObserver(ref, callback, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, options]);
}
