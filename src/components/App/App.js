import React from 'react';
import './App.css';
import {
  DesignLink,
  Header,
  Content,
  Side,
  InfoContainer,
  Description,
  Skills,
  Interests
} from '..';

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
          <Description header="Personal statement" content="This is some personal statement" />
          <Skills skills={['Karate', 'Bug fixing', 'Kitten stroking']}/>
          <Interests />
        </Side>
      </Content>
    </div>
  );
}

export default App;
