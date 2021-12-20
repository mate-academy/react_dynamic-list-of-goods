import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getGoodsHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;

    switch (name) {
      case 'getAll':
        getAll()
          .then(goods => (
            this.setState({ goods })
          ));
        break;

      case 'get5First':
        get5First()
          .then(goods => (
            this.setState({ goods })
          ));
        break;

      case 'getRedGoods':
        getRedGoods()
          .then(goods => (
            this.setState({ goods })
          ));
        break;

      default: this.setState({ goods: [] });
    }
  };

  clearHandler = () => this.setState({ goods: [] });

  render() {
    return (
      <>
        <div className="container">
          <h1 className="container__title">Dynamic list of Goods</h1>
          <div className="container__buttons">
            <button
              className="container__button"
              type="button"
              name="getAll"
              onClick={this.getGoodsHandler}
            >
              Load All Goods
            </button>
            <button
              className="container__button"
              type="button"
              name="get5First"
              onClick={this.getGoodsHandler}
            >
              Load 5 First Goods
            </button>
            <button
              className="container__button"
              type="button"
              name="getRedGoods"
              onClick={this.getGoodsHandler}
            >
              Load Red Goods
            </button>
          </div>
          <div
            className="container__list"
          >
            <GoodsList goods={this.state.goods} />
          </div>
          <button
            className="container__button"
            type="button"
            onClick={this.clearHandler}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
}
