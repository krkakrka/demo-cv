import React from 'react';
import SkillBar from './SkillBar';

function Skills({ skills }) {
  return (
    <div>
      <h3>Skills and strenghts</h3>
      {skills.map(skill => (
        <div key={skill.name + skill.value}>
          <span>{skill.name}</span>
          <SkillBar initialValue={skill.initialValue} />
        </div>
      ))}
    </div>
  );
}

export default Skills;