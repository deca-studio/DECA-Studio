import React, { useState, useEffect } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 transition-transform duration-200 ease-out"
      style={{
        // Center the follower on the cursor. The new size is 24rem (w-96), so offset by 12rem.
        transform: `translate(calc(${position.x}px - 12rem), calc(${position.y}px - 12rem))`,
      }}
    >
        {/* Increased size and opacity for a more pronounced effect */}
        <div className="w-96 h-96 bg-violet-400 dark:bg-violet-500 rounded-full blur-3xl opacity-50 dark:opacity-60"></div>
    </div>
  );
};

export default CursorFollower;