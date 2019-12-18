import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';
import { GoodsFetching } from './api/goodsApi';

const url
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
    // isActive: false,
  };

loadAllGoods = () => {
  GoodsFetching(url).then((goods) => {
    this.setState({
      goods,

    });
  });
}

loadFiveFirstGoods = () => {
  GoodsFetching(url).then((goods) => {
    this.setState({
      goods: [...goods].slice(0, 5),
    });
  });
}

loadRedGoods = () => {
  GoodsFetching(url).then((goods) => {
    this.setState({
      goods: [...goods].filter(good => good.color === 'red'),
    });
  });
}

render() {
  const { goods } = this.state;

  return (
    <div className="App">
      <h1>Goods</h1>

      <section>

        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load Goods
        </button>

        <button
          type="button"
          onClick={this.loadFiveFirstGoods}
        >
          Load 5 First Goods
        </button>

        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load Red Goods
        </button>

        <GoodsList goods={goods} />
      </section>
    </div>
  );
}
}

export default App;
