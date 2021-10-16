import React from 'react';
import './App.scss';
import { GoodsList } from './api/components/GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface State {
  selectedListType: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedListType: '',
  };

  selectList = (name: string) => {
    this.setState({ selectedListType: name });
  };

  render() {
    const list = ['all', 'first five', 'red'];

    return (
      <>
        <h1>List of Goods</h1>
        <h2>Display goods: </h2>
        <div>
          {list.map(el => (
            <button
              type="button"
              name="name"
              onClick={() => this.selectList(el)}
            >
              Display&nbsp;
              {el}
              &nbsp;
              goods
            </button>
          ))}
        </div>
        <GoodsList listType={this.state.selectedListType} />
      </>
    );
  }
}

export default App;
