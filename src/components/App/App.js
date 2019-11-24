import React from 'react';
import './App.css';
import {
  DesignLink,
  Header,
  Content,
  Side,
  InfoContainer
} from '..';


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
            initialItemList={[
              { itemKey: 'key1', value: 'some value' },
              { itemKey: 'key2', value: 'some value 2' },
              { itemKey: 'k', value: 'some value 3' },
            ]}
            onItemAdd={console.log}
          />
          <InfoContainer
            header="Details"
            description="Some description"
            initialItemList={[
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
