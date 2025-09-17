import React, { ReactNode } from 'react';

interface TitleProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  center?: boolean;
}

const Title = ({
  title,
  subtitle,
  gradientFrom = '#232323',
  gradientTo = '#2ecc71',
  className = '',
  center,
}: TitleProps): JSX.Element => {
  return (
    <div className={`relative mb-2 ${className}`}>
      <div
        className={`absolute inset-0 rounded-xl blur-lg opacity-60 pointer-events-none`}
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientFrom}, ${gradientTo}1A)`, // 1A = ~10% opacity
        }}
      />
      {/* title */}
      <h1
        className={`relative z-10 text-black font-extrabold text-[24px] leading-tight drop-shadow-lg ${
          center && 'text-center'
        }`}
        style={{
          textShadow: `0 2px 16px #222, 0 1px 0 ${gradientTo}`,
        }}
      >
        {title}
      </h1>
      {/* subtitle */}
      {subtitle && (
        <p
          className={`relative z-1 text-gray-300 text-[14px] mt-1 leading-relaxed ${
            center && 'text-center'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
