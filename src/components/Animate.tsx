"use client";

import { useEffect, useRef, useState } from "react";

type AnimateProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Animate({ children, className, delay }: AnimateProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const classes = ["animate-scroll", visible ? "is-visible" : null, className]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={classes}
    >
      {children}
    </div>
  );
}

