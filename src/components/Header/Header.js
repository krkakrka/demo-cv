import React from 'react';
import SubHeader from './SubHeader';
import pillowMan from './pillow-man.jpg';
import './Header.css';

function Header() {
  const [isMouseOver, setMouseOver] = React.useState(false);
  const greeting = isMouseOver ? 'world' : 'hello';
  return (
    <div
      className="Header"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <h1 className="Header-hello">{greeting}</h1>
      <img className="Header-image" src={pillowMan} alt="Something visual" />
      <SubHeader />
    </div>
  );
}

export default Header;
