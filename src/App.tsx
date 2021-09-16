import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  goods: Good[],
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showAllGood = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  show5First = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  showRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>

        <div className="app__buttons">
          <button
            className="app__button btn btn-primary"
            type="button"
            onClick={this.showAllGood}
          >
            Load All goods
          </button>
          <button
            className="app__button btn btn-primary"
            type="button"
            onClick={this.show5First}
          >
            Load 5 first goods
          </button>
          <button
            className="app__button btn btn-primary"
            type="button"
            onClick={this.showRedGoods}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}
