
import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
}

export const useInView = <T extends HTMLElement,>(options: UseInViewOptions = {}): [MutableRefObject<T | null>, boolean] => {
  const { threshold = 0.1, once = false } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, once]);

  return [ref, isInView];
};
