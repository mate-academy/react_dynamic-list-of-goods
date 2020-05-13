import React, { Component } from 'react';
import { getGoods } from './api/getGoods';
import GoodsList from './components/GoodsList';
import Button from './components/Button';
import './App.scss';

interface FilterConfigs {
  all: string;
  firstFive: string;
  color: string;
}

interface FilterButtons {
  id: number;
  name: string;
}

const filterConfigs: FilterConfigs = {
  all: 'Load goods',
  firstFive: 'Load first five goods',
  color: 'Load red goods',
};

const FILTER_BUTTONS: FilterButtons[] = [
  {
    id: 0,
    name: filterConfigs.all,
  },
  {
    id: 1,
    name: filterConfigs.firstFive,
  },
  {
    id: 2,
    name: filterConfigs.color,
  },
];

type State = {
  goods: Good[];
  error: string;
  active: boolean[];
};

class App extends Component<{}, State> {
  state = {
    goods: [],
    error: '',
    active: [false, false, false],
  };

  /* eslint-disable no-return-assign, no-param-reassign */
  loadGoods = async (id: number, name: string) => {
    getGoods()
      .then(goods => this.filterGoods(goods, name))
      .then(goods => this.setState(state => ({
        goods,
        error: '',
        active: state.active.map((_bool: boolean, idx: number): boolean => (
          id === idx ? _bool = true : _bool = false
        )),
      })))
      .catch((error) => {
        this.setState({
          error: `Something went wrong! ${error}`,
          goods: [],
        });
      });
  };

  filterGoods = async (goods: Good[], name: string) => {
    if (name === filterConfigs.color) {
      return goods.filter((good: Good) => good.color === name) || [];
    }

    if (name === filterConfigs.firstFive) {
      return goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5) || [];
    }

    return goods;
  };

  render() {
    const { goods, error, active } = this.state;

    return (
      <section className="goods">
        <h1 className="main-title">Dynamic List Of Goods</h1>

        <div className="goods__buttons-container">
          {FILTER_BUTTONS.map(({ id, name }) => (
            <Button
              key={id}
              handleClick={() => this.loadGoods(id, name)}
              active={active[id]}
            >
              {name}
            </Button>
          ))}
        </div>

        <div className="goods__error">{error}</div>

        <GoodsList goodsList={goods} />
      </section>
    );
  }
}

export default App;
