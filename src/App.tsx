import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goodsList: Good[] | null;
};

class App extends React.Component <{}, State> {
  state = {
    goodsList: null,
  };

  handleEvent = async (eventType:() => Promise<Good[]>) => {
    const list = await eventType();

    this.setState({
      goodsList: list,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__Tittle">Dynamic list of Goods</h1>
        <div className="App__Button-wrapper">
          <button
            type="button"
            onClick={() => {
              this.handleEvent(getAll);
            }}
            className="button LoadAllButton"
          >
            Load all goods
          </button>
          <button
            type="button"
            onClick={() => {
              this.handleEvent(get5First);
            }}
            className="button LoadFiveButton"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => {
              this.handleEvent(getRedGoods);
            }}
            className="button LoadFiveButton"
          >
            Load only red goods
          </button>
        </div>

        {this.state.goodsList && <GoodsList goodsList={this.state.goodsList} />}
      </div>
    );
  }
}

export default App;
