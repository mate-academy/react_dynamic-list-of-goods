import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  sort = async (name: string) => {
    const goodsList = await getAll();

    let goods: Good[] = [];

    switch (name) {
      case 'all':
        goods = goodsList;
        break;

      case 'five':
        goods = get5First(goodsList);
        break;

      case 'red':
        goods = getRedGoods(goodsList);
        break;

      default:
        break;
    }

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="container__title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            name="all"
            type="button"
            className="button"
            onClick={(e) => {
              this.sort(e.currentTarget.name);
            }}
          >
            All
          </button>

          <button
            name="five"
            type="button"
            className="button"
            onClick={(e) => {
              this.sort(e.currentTarget.name);
            }}
          >
            5
          </button>
          <button
            name="red"
            type="button"
            className="button"
            onClick={(e) => {
              this.sort(e.currentTarget.name);
            }}
          >
            Red
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
