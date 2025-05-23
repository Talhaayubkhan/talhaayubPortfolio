import React from 'react';

const SkillBar = ({ skill, gradientFrom, gradientTo }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <span>{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} h-2 rounded-full transition-all duration-1000`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;