import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold text-center mb-12">
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
};

export default SectionTitle;