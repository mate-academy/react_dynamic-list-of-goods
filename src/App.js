import React from 'react';
import './App.css';
import GoodList from './GoodList';
import { getGoods } from './api';

const FILTER_TYPES = ['Load goods', 'Load 5 first goods', 'Load red goods'];

class App extends React.Component {
  state = {
    currentGoods: [],
    error: false,
  };

  loadGoods= async(filter) => {
    let goods;

    try {
      goods = await getGoods();
    } catch (e) {
      return this.setState({ error: true });
    }

    let visibleGoods;

    switch (filter) {
      case 'Load 5 first goods':
        visibleGoods = goods.sort((a, b) => (
          a.name.localeCompare(b.name)))
          .splice(0, 5);
        break;

      case 'Load red goods':
        visibleGoods = goods.filter(good => good.color === 'red');
        break;

      default:
        visibleGoods = goods;
    }

    return this.setState({
      currentFilter: filter,
      currentGoods: visibleGoods,
    });
  };

  render() {
    const { currentGoods, currentFilter, error } = this.state;

    if (error) {
      return <p>Oops, something went wrong</p>;
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {FILTER_TYPES.map(filter => (
          <button
            key={filter}
            type="button"
            value={filter}
            className="button"
            disabled={currentFilter === filter}
            onClick={() => this.loadGoods(filter)}
          >
            {filter}
          </button>
        ))}
        <GoodList goods={currentGoods} />
      </div>
    );
  }
}

export default App;
