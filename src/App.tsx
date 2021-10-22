import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

import { GoodList } from './components/GoodList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  allGoodsItem = async () => {
    const allGoodsFromServer = await getAll();

    this.setState({
      goods: allGoodsFromServer,
    });
  };

  fiveFirstItems = async () => {
    const fiveFirstFromServer = await get5First();

    this.setState({
      goods: fiveFirstFromServer,
    });
  };

  redItems = async () => {
    const redItemsFromServer = await getRed();

    this.setState({
      goods: redItemsFromServer,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1>Dynamic list of Goods</h1>
          <div className="button-container">
            <button
              type="button"
              onClick={this.allGoodsItem}
              className="btn btn-primary"
            >
              Load All goods
            </button>

            <button
              type="button"
              onClick={this.fiveFirstItems}
              className="btn btn-success"
            >
              Load 5 first goods
            </button>

            <button
              type="button"
              onClick={this.redItems}
              className="btn btn-danger"
            >
              Load red goods
            </button>

          </div>
          {goods.length > 0 && (
            <GoodList goods={goods} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
