import { useEffect, useState } from "react";

export default function ObserverHook(ref) {

   const [isIntersecting, setIntersecting] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => setIntersecting(entry.isIntersecting),
         {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
         }
      );
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
   }, [ref]);

   return isIntersecting;
}