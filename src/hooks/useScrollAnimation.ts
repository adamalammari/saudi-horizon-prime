import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll("[data-animate]");
      if (!elements) return;

      elements.forEach((el, i) => {
        const type = el.getAttribute("data-animate") || "fade-up";
        const delay = parseFloat(el.getAttribute("data-delay") || "0") + i * 0.1;

        const from: gsap.TweenVars = { opacity: 0 };
        if (type === "fade-up") from.y = 40;
        if (type === "fade-right") from.x = -40;
        if (type === "fade-left") from.x = 40;
        if (type === "scale") { from.scale = 0.9; }

        gsap.from(el, {
          ...from,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};

export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 20,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
};

export const useCountUp = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ref.current) return;

    const target = parseInt(ref.current.getAttribute("data-target") || "0", 10);

    if (prefersReducedMotion) {
      ref.current.textContent = target.toString();
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.val).toString();
      },
    });
  }, []);

  return ref;
};
