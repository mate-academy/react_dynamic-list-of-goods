import React, { ChangeEventHandler, Component } from 'react';
import { getGoods } from './api/getGoods';
import GoodsList from './components/GoodsList';
import Buttons, { filterConfigs } from './components/Buttons';
import './App.scss';

type State = {
  goods: Good[];
  error: string;
  active: {};
  selectedColor: string;
};

class App extends Component<{}, State> {
  state = {
    goods: [],
    error: '',
    active: {
      activeLoad: false,
      activeLoadFive: false,
      activeLoadColor: false,
    },
    selectedColor: '',
  };

  handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value } = event.target;

    this.setState(state => ({ ...state, [name]: value }));
    this.loadGoods(value);
  };

  loadGoods = async (name: string) => {
    getGoods()
      .then(goods => this.filterGoods(goods, name))
      .then(goods => this.setState({ goods, error: '' }))
      .catch((error) => {
        this.setState({
          error: `Something went wrong! ${error}`,
          goods: [],
        });
      });
  };

  filterGoods = async (goods: Good[], name: string) => {
    const { selectedColor } = this.state;

    if (name === filterConfigs.firstFive) {
      this.setState({
        active: {
          activeLoad: false,
          activeLoadFive: true,
          activeLoadColor: false,
        },
      });

      return goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5) || [];
    }

    if (name === selectedColor) {
      this.setState({
        active: {
          activeLoad: false,
          activeLoadFive: false,
          activeLoadColor: true,
        },
      });

      return goods.filter((good: Good) => good.color === selectedColor) || [];
    }

    this.setState({
      active: {
        activeLoad: true,
        activeLoadFive: false,
        activeLoadColor: false,
      },
    });

    return goods;
  };

  render() {
    const { goods, error, active, selectedColor } = this.state;

    return (
      <section className="goods">
        <h1 className="main-title">Dynamic List Of Goods</h1>

        <Buttons
          handleClick={this.loadGoods}
          onChange={this.handleChange}
          {...active}
          selectedColor={selectedColor}
        />

        <div className="goods__error">{error}</div>

        <GoodsList goodsList={goods} />
      </section>
    );
  }
}

export default App;
