import React from 'react';
import './App.css';
import GoodsList from './GoodsList';
import { loadGoods } from './api';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    loadGoods()
      .then((loadedGoods) => {
        this.setState({ goods: loadedGoods });
      });
  };

  loadOnlyRedGoods = () => {
    loadGoods()
      .then((loadedGoods) => {
        this.setState({ goods: loadedGoods.filter((good: Good) => good.color === 'red') });
      });
  };

  loadSortGoods = () => {
    loadGoods()
      .then(loadedGoods => {
        this.setState({
          goods: [...loadedGoods]
            .sort((a: Good, b: Good) => (a.name).localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.loadSortGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadOnlyRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />

      </>
    );
  }
}

export default App;
