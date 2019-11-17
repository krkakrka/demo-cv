import React from 'react';
import pillowMan from './pillow-man.jpg';
import './App.css';


// content
//   leftSideca
//     infoContainer
//     infoContainer
//   leftSide
//   rightSide
//     description
//     skills
//     interests
//   rightSide
// content

function Header() {
  return (
    <div className="Header">
      <h1 className="Header-hello">hello</h1>
      <img className="Header-image" src={pillowMan} alt="Something visual" />
      <SubHeader />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="SubHeader">
      <h3>Karolis</h3>
      <hr />
      <p>Curriculum vitae</p>
    </div>
  );
}

function Content(props) {
  return (
    <div className="Content">
      {props.children}
    </div>
  );
}

function Side(props) {
  const side = props.side;
  const className = `Side-${side}`;
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

function InfoContainer(props) {
  return (
    <div className="InfoContainer">
      <h3>{props.header}</h3>
      {props.description && <p>{props.description}</p>}
      <ul>
        {props.itemList.map(item => {
          return (
            <li key={item.itemKey}>{item.itemKey + '-' + item.value}</li>
          );
        })}
      </ul>
    </div>
  );
}

function DesignLink() {
  return (
    <a
      className="DesignLink"
      rel="noopener noreferrer"
      target="_blank"
      href="https://weare.guru/wp-content/uploads/2014/10/Sam-Oehley-Creative-CV.jpg"
    >
      Design
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <DesignLink />
      <Header />
      <Content>
        <Side side="left">
          <InfoContainer
            header="Details"
            description="Some description"
            itemList={[
              { itemKey: 'key1', value: 'some value' },
              { itemKey: 'key2', value: 'some value 2' },
              { itemKey: 'k', value: 'some value 3' },
            ]}
          />
        </Side>
        <Side side="right">
          content right
        </Side>
      </Content>
    </div>
  );
}

export default App;
