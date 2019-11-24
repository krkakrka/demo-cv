import React from 'react';
import './SkillBar.css';

function preventDefault(e) {
  e.preventDefault();
}

function SkillBar({ initialValue }) {
  const [draggedValue, setDraggedValue] = React.useState(initialValue);
  const skillContainerEl = React.useRef();

  const adjustSkill = (e) => {
    const { x: containerX, width: fullWidth } = skillContainerEl.current.getBoundingClientRect();
    const { clientX: mouseX } = e;
    const relativeX = mouseX - containerX;
    const relativeXPercentage = Math.round(relativeX / fullWidth * 100);
    setDraggedValue(relativeXPercentage);
  };

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

export default SkillBar;