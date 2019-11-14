import React from 'react';
import logo from './logo.svg';
import lady from './lady.png';
import hello from './hello.png';
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
      <img src={hello} />
      <img src={lady} />
      <SubHeader />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="SubHeader">
      <h3>Karolis</h3>
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

function App() {
  return (
    <div>
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
