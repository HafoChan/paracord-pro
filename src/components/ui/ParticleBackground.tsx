import React from 'react';

export function ParticleBackground() {
  return (
    <div className="particles">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + i * 12}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + Math.random() * 6}s`
          }}
        />
      ))}
    </div>
  );
}
