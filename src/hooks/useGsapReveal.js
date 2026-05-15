import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapReveal - Hook to animate a ref when it enters the viewport
 * @param {Object} options - GSAP animation options
 * @returns {React.RefObject}
 */
export function useGsapReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { y: 40, opacity: 0, ...options.from },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...options.to,
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}
