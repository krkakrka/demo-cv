import React from 'react';
import './Skills.css';

function SkillBar({ label, initialPercentage, onPercentageUpdated }) {
  const [percentage, setPercentage] = React.useState(initialPercentage);
  const [isBeingDragged, setIsBeingDragged] = React.useState(false);

  const updatePercentage = (e) => {
    const boundClientRect = e.currentTarget.getBoundingClientRect();
    const { left, width } = boundClientRect;
    const mouseX = e.clientX;
    const mouseOffsetPx = mouseX - left;
    const mouseOffsetPercentage = mouseOffsetPx / width * 100;
    setPercentage(mouseOffsetPercentage);
    onPercentageUpdated(mouseOffsetPercentage);
  };

  return (
    <div>
      <label>{label}</label>
      <div
        className="SkillBar-background"
        onMouseMove={(e) => isBeingDragged && updatePercentage(e)}
        onClick={updatePercentage}
        onMouseDown={() => setIsBeingDragged(true)}
        onMouseUp={() => setIsBeingDragged(false)}
      >
        <div className="SkillBar-foreground" style={{
          width: `${percentage}%`
        }} />
      </div>
    </div>
  );
}

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