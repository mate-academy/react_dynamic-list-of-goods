import React from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  visibleGoods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    visibleGoods: [],
  };

  showAll = () => {
    getAll()
      .then(goods => {
        this.setState({ visibleGoods: goods });
      });
  };

  showFirstFive = () => {
    get5First()
      .then(goods => {
        this.setState({ visibleGoods: goods });
      });
  };

  showRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ visibleGoods: goods });
      });
  };

  render() {
    return (
      <div className="container section is-medium">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Dynamic list of Goods</h1>

            <button
              type="button"
              onClick={this.showAll}
              className="button is-primary is-light"
            >
              Load All goods
            </button>

            <button
              className="button is-link is-light mx-2"
              type="button"
              onClick={this.showFirstFive}
            >
              Load 5 goods
            </button>

            <button
              className="button is-danger is-light"
              type="button"
              onClick={this.showRedGoods}
            >
              Load red goods
            </button>
          </div>

          <div className="column">
            <GoodsList goodsToShow={this.state.visibleGoods} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
