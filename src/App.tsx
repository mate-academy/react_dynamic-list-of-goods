import React from 'react';
import './App.css';
import { getGoods } from './GoodsFromServer';
import GoodsList from './GoodsList';
import { Good } from './IGood';

type AppState = {
  goods: Good[],
  isLoading: boolean,
};

type AppProps = {};

class App extends React.Component<AppProps, AppState> {
  state = {
    goods: [],
    isLoading: false,
  };

  loadGoods = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = event.currentTarget.id;

    this.setState({ isLoading: true });

    if (id === 'all') {
      getGoods()
        .then(goods => {
          this.setState({ goods, isLoading: false });
        });
    }

    if (id === 'first5') {
      getGoods()
        .then(goods => {
          this.setState({
            goods: goods.sort((a: Good, b: Good) => (a.name.localeCompare(b.name))).slice(0, 5),
            isLoading: false,
          });
        });
    }

    if (id === 'red') {
      getGoods()
        .then(goods => {
          this.setState({
            goods: goods.filter((good: Good) => good.color === 'red'),
            isLoading: false,
          });
        });
    }
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <div className="goods-list">
        <h1 className="display-5">Dynamic list of Goods</h1>
        {isLoading
          && (
            <div className="spinner-border text-success snip" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        <GoodsList goods={goods} />
        <button
          type="button"
          className="btn btn-success mr"
          id="all"
          onClick={this.loadGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="btn btn-primary mr"
          id="first5"
          onClick={this.loadGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="btn btn-danger"
          id="red"
          onClick={this.loadGoods}
        >
          Load red goods
        </button>
      </div>
    );
  }
}

export default App;
