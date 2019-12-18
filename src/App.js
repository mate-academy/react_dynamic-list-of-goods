import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import getGoods from './goodsApi';

const URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
    isClickedAll: false,
    isClickedFirstFive: false,
    isClickedRed: false,
  };

  showAllGoods =() => {
    getGoods(URL)
      .then((data) => {
        const visibleGoods = data;

        this.setState(prevState => ({
          goods: [...visibleGoods],
          isClickedAll: true,
          isClickedFirstFive: false,
          isClickedRed: false,
        }));
      })
      .catch(() => this.setState(prevState => ({
        goods: [],
      })));
  };

  showFirstFiveGoods =() => {
    getGoods(URL)
      .then((data) => {
        const visibleGoods = data.filter((good, i) => i < 5);

        this.setState(prevState => ({
          goods: [...visibleGoods],
          isClickedAll: false,
          isClickedFirstFive: true,
          isClickedRed: false,
        }));
      })
      .catch(() => this.setState(prevState => ({
        goods: [],
      })));
  };

  showRedGoods =() => {
    getGoods(URL)
      .then((data) => {
        const visibleGoods = data.filter(good => good.color === 'red');

        this.setState(prevState => ({
          goods: [...visibleGoods],
          isClickedAll: false,
          isClickedFirstFive: false,
          isClickedRed: true,
        }));
      })
      .catch(() => this.setState(prevState => ({
        goods: [],
      })));
  };

  render() {
    const
      {
        goods,
        isClickedAll,
        isClickedFirstFive,
        isClickedRed,
      } = this.state;

    return (
      <div className="goods">
        <button
          className={isClickedAll
            ? 'goods__button goods__button--clicked'
            : 'goods__button'}
          type="button"
          onClick={this.showAllGoods}
        >
          All
        </button>
        <button
          type="button"
          className={isClickedFirstFive
            ? 'goods__button goods__button--clicked'
            : 'goods__button'}
          onClick={this.showFirstFiveGoods}
        >
          First 5
        </button>
        <button
          type="button"
          className={isClickedRed
            ? 'goods__button goods__button--clicked'
            : 'goods__button'}
          onClick={this.showRedGoods}
        >
          Red Goods
        </button>
        <GoodsList
          visibleGoods={goods}
        />
      </div>
    );
  }
}

export default App;
