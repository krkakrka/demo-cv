import React from 'react';
import './Skills.css';

function preventDefault(e) {
  e.preventDefault();
}

function SkillBar({ initialValue }) {
  const [draggedValue, setDraggedValue] = React.useState(initialValue);
  const skillContainerEl = React.useRef();

  const startAdjustSkill = (e) => {
    window.addEventListener('mousemove', adjustSkill);
    window.addEventListener('mouseup', stopAdjustSkill);
    window.addEventListener('selectstart', preventDefault);
  };

  const stopAdjustSkill = () => {
    window.removeEventListener('mousemove', adjustSkill);
    window.removeEventListener('mouseup', stopAdjustSkill);
    window.removeEventListener('selectstart', preventDefault);
  };

  const adjustSkill = (e) => {
    const { x: containerX, width: fullWidth } = skillContainerEl.current.getBoundingClientRect();
    const { clientX: mouseX } = e;
    const relativeX = mouseX - containerX;
    const relativeXPercentage = Math.round(relativeX / fullWidth * 100);
    setDraggedValue(relativeXPercentage);
  };

  return (
    <div className="SkillBar-container">
      <div className="SkillBar-bar-background" />
      <div
        className="SkillBar-bar-foreground-container"
        ref={skillContainerEl}
      >
        <div
          className="SkillBar-bar-foreground"
          style={{ width: `${draggedValue}%` }}
        />
        <div
          className="Skillbar-bar-foreground-slider"
          onMouseDown={startAdjustSkill}
        />
      </div>
    </div>
  );
}

function SkillRow({ name, initialValue }) {
  return (
    <div>
      <span>{name}</span>
      <SkillBar initialValue={initialValue} />
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div>
      <h3>Skills and strenghts</h3>
      {skills.map(skill => (
        <SkillRow key={skill.name + skill.value} name={skill.name} initialValue={skill.initialValue} />
      ))}
    </div>
  );
}

export default Skills;