import React, { Component } from 'react';
import { getGoods } from './api';
import { GoodsList } from './components/GoodsList';

const FILTER_TYPES = {
  all: 'All goods',
  firstFive: '5 first goods',
  red: 'red',
};

const FILTER_BUTTONS = [
  {
    id: '1',
    type: FILTER_TYPES.all,
    name: 'All goods',
  },
  {
    id: '2',
    type: FILTER_TYPES.firstFive,
    name: '5 first goods',
  },
  {
    id: '3',
    type: FILTER_TYPES.red,
    name: 'Red goods',
  },
];

interface Good {
  id: number;
  name: string;
  color: string;
}

interface State {
  goods: Good[];
  isLoading: boolean;
}

class App extends Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
  };

  loadGoods = async (param: string) => {
    this.setState({ isLoading: true });

    getGoods()
      .then(goods => this.filterGoods(goods, param))
      .then(goods => this.setState({ goods }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  filterGoods = async (goods: Good[], param: string) => {
    if (param === FILTER_TYPES.red) {
      return goods.filter((good: Good) => good.color === param) || [];
    }

    if (param === FILTER_TYPES.firstFive) {
      return goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name)).slice(0, 5) || [];
    }

    return goods;
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Dynamic list of Goods</h1>
          <div className="buttons">
            {FILTER_BUTTONS.map(button => (
              <button
                key={button.id}
                type="button"
                className="button"
                onClick={() => this.loadGoods(button.type)}
              >
                {button.name}
              </button>
            ))}
          </div>
          {isLoading && (
            <progress className="progress is-small is-info" max="100" />
          )}
          <GoodsList goods={goods} />
        </div>
      </section>
    );
  }
}

export default App;
