import React from 'react';
import SkillBar from './SkillBar';
import './Skills.css';

function Skills({ skills, onSkillUpdated,  }) {
  return (
    <div>
      <h3>Skills</h3>
      {skills.map(skill => (
        <SkillBar
          key={skill.label + skill.percentage}
          label={skill.label}
          initialPercentage={skill.percentage}
          onPercentageUpdated={onSkillUpdated}
        />
      ))}
    </div>
  );
}

export default Skills;