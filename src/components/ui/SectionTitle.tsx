import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-4xl font-bold font-serif mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl italic ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mx-auto w-24 h-1 mt-6 ${light ? 'bg-white' : 'bg-rose-500'}`}></div>
    </div>
  );
};