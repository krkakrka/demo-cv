import React from 'react';

function Skills({ skills }) {
  return (
    <div>
      {skills.join(' | ')}
    </div>
  );
}

export default Skills;