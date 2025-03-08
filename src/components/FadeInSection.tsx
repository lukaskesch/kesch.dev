"use client";

import { useEffect } from "react";

export default function FadeInSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry", entry);
            entry.target.classList.remove("opacity-10");
            entry.target.classList.add("opacity-100");
            // Once the animation is done, we can stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger a bit before the element is fully in view
      }
    );

    const elements = document.querySelectorAll("[data-fade-in]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // This component doesn't render anything
}
