import React from 'react';

function Description({ header, content }) {
  return (
    <section>
      <h3>{header}</h3>
      <p>{content}</p>
    </section>
  );
}

export default Description;