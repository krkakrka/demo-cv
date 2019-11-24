import React from 'react';
import './Content.css';

function Content({ children, className, ...otherProps }) {
  return (
    <div className={`Content ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

export default Content;
