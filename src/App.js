import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import getGoods from './goodsApi';

const URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
    clicked: '',
  };

  showAllGoods =() => {
    getGoods(URL)
      .then((data) => {
        const visibleGoods = data;

        this.setState(prevState => ({
          goods: [...visibleGoods],
          clicked: 'all',
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
          clicked: 'firstFive',
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
          clicked: 'red',
        }));
      })
      .catch(() => this.setState(prevState => ({
        goods: [],
      })));
  };

  render() {
    const { goods, clicked } = this.state;
    const buttons = [
      {
        name: 'all', title: 'ALL', operation: this.showAllGoods,
      },
      {
        name: 'firstFive', title: 'FIRST 5', operation: this.showFirstFiveGoods,
      },
      {
        name: 'red', title: 'RED', operation: this.showRedGoods,
      },
    ];

    return (
      <div className="goods">

        {buttons.map(currentButton => (
          <button
            className={clicked === currentButton.name
              ? 'goods__button goods__button--clicked'
              : 'goods__button'}
            type="button"
            onClick={currentButton.operation}
          >
            {currentButton.title}
          </button>
        ))}

        <GoodsList
          visibleGoods={goods}
        />
      </div>
    );
  }
}

export default App;
