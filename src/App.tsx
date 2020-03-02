import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.css';

const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

// const fetchData = (dataUrl: string) => {
//   fetch(dataUrl).then(response => response.json())
// };

interface MyState {
  goods: Good[];
  isLoaded: boolean;
}

class App extends React.Component<{}, MyState> {
  state = {
    goods: [],
    isLoaded: true,
  };

  loadAll = () => {
    fetch(url).then(response => response.json())
      .then(goods => {
        this.setState({
          goods,
          isLoaded: true,
        });
      });
  };

  load5Goods = () => {
    fetch(url).then(response => response.json())
      .then(goods => {
        const fiveGoods = [...goods]
          .sort((a, b) => a.name.localeCompare(b.name));

        fiveGoods.length = 5;
        this.setState({
          goods: fiveGoods,
          isLoaded: true,
        });
      });
  };

  loadRedGoods = () => {
    fetch(url).then(response => response.json())
      .then(goods => {
        const redGoods = goods.filter((good: Good) => good.color === 'red');

        this.setState({
          goods: redGoods,
          isLoaded: true,
        });
      });
  };

  render() {
    const { goods, isLoaded } = this.state;

    return (
      <div>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.loadAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.load5Goods}
        >
          Load 5 first
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        {isLoaded
          ? (
            <>
              <GoodsList goods={goods} />
            </>
          )
          : (
            <p>no loaded goods</p>
          )}
      </div>
    );
  }
}

export default App;
