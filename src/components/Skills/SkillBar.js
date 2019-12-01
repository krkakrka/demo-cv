import React from 'react';
import './SkillBar.css';

function preventDefault(e) {
  e.preventDefault();
}

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

  const startAdjustment = () => {
    setIsBeingDragged(true);
    window.addEventListener('selectstart', preventDefault);
  };
  const stopAdjustment = () => {
    setIsBeingDragged(false);
    window.removeEventListener('selectstart', preventDefault);
  };

  return (
    <div>
      <label>{label}</label>
      <div
        className="SkillBar-background"
        onMouseMove={(e) => isBeingDragged && updatePercentage(e)}
        onClick={updatePercentage}
        onMouseDown={startAdjustment}
        onMouseUp={stopAdjustment}
      >
        <div className="SkillBar-foreground" style={{
          width: `${percentage}%`
        }} />
      </div>
    </div>
  );
}

export default SkillBar;