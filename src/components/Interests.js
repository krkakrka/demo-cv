import React from 'react';

function Interests({ interests }) {
  return (
    <div>
      {interests.join(' | ')}
    </div>
  );
}

export default Interests;