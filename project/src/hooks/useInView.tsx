import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface InViewResult {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export function useInView({
  threshold = 0,
  rootMargin = '0px',
  once = false
}: InViewOptions = {}): InViewResult {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !once) {
          setInView(isIntersecting);
        }
        
        if (isIntersecting && once && observer) {
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(ref.current);
    observerRef.current = observer;
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, once]);
  
  return { ref, inView };
}