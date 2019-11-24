import React from 'react';

class InfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: props.initialItemList,
      itemNameInput: ''
    };
  }

  addItemToList() {
    const newRandomItem = {
      itemKey: Math.random(),
      value: this.state.itemNameInput,
    };
    this.setState({
      itemList: [...this.state.itemList, newRandomItem],
      itemNameInput: ''
    });
    this.props.onItemAdd(newRandomItem);
  }

 render() {
  const { props, state } = this;
  return (
    <div className="InfoContainer">
      <h3>{props.header}</h3>
      {props.description && <p>{props.description}</p>}
      <input value={state.itemNameInput} onChange={(e) => this.setState({ itemNameInput: e.target.value })} />
      <button onClick={() => this.addItemToList()}>Add random item</button>
      <ul>
        {state.itemList.map(item => {
          return (
            <li key={item.itemKey}>{item.itemKey + '-' + item.value}</li>
          );
        })}
      </ul>
    </div>
  );
}
}

export default InfoContainer;