import React from 'react';
import './Skills.css';

function SkillBar({ value }) {
  return (
    <div className="SkillBar-container">
      <div className="SkillBar-bar-background" />
      <div className="SkillBar-bar-foreground" style={{ width: `${value}%` }} />
    </div>
  );
}

function SkillRow({ name, value }) {
  return (
    <div>
      <span>{name}</span>
      <SkillBar value={value} />
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div>
      <h3>Skills and strenghts</h3>
      {skills.map(skill => (
        <SkillRow key={skill.name + skill.value} name={skill.name} value={skill.value} />
      ))}
    </div>
  );
}

export default Skills;