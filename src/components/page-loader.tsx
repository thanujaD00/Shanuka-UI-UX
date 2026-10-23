"use client";

import { useEffect, useState } from "react";

const nameLetters = [
  "M21 5H5V17H21V29H5",
  "M5 5V29M21 5V29M5 17H21",
  "M5 29L13 5L21 29M8 20H18",
  "M5 29V5L21 29V5",
  "M5 5V21C5 26.3 8 29 13 29C18 29 21 26.3 21 21V5",
  "M5 5V29M21 5L5 17L21 29",
  "M5 29L13 5L21 29M8 20H18",
];

export function PageLoader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setComplete(true), 1400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`page-loader${complete ? " page-loader--complete" : ""}`} aria-hidden="true">
      <div className="page-loader__content">
        <svg className="page-loader__wordmark" viewBox="0 0 216 34" fill="none">
          {nameLetters.map((path, index) => (
            <path
              key={index}
              d={path}
              pathLength="360"
              transform={`translate(${index * 31} 0)`}
              className="page-loader__letter"
              style={{ animationDelay: `${index * 0.08}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
