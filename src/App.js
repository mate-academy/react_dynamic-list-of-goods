import React from 'react';
import './App.css';
import cn from 'classnames';
import GoodList from './GoodList';
import { getGoods } from './api';

const FILTER_TYPES = ['Load goods', 'Load 5 first goods', 'Load red goods'];

class App extends React.Component {
  state = {
    allGoods: [],
    top5Goods: [],
    redGoods: [],
    usedFilters: [],
    error: false,
  };

  loadGoods= async(filter) => {
    let goods;

    try {
      goods = await getGoods();
    } catch (e) {
      return this.setState({ error: true });
    }

    this.setState(prevState => ({
      usedFilters: [...prevState.usedFilters, filter],
    }));

    switch (filter) {
      case 'Load 5 first goods':
        return this.setState({
          top5Goods: goods
            .sort((a, b) => (
              a.name.localeCompare(b.name)))
            .splice(0, 5),
        });
      case 'Load red goods':
        return this.setState({
          redGoods: goods.filter(good => good.color === 'red'),
        });
      default:
        return this.setState({ allGoods: goods });
    }
  };

  render() {
    const { allGoods, usedFilters, top5Goods, redGoods, error } = this.state;

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
            className={cn({
              button: true,
              'visually-hidden': usedFilters.includes(filter),
            })}
            onClick={() => this.loadGoods(filter)}
          >
            {filter}
          </button>
        ))}

        <div className="list-wrapper">
          {usedFilters.includes('Load goods') && <GoodList goods={allGoods} />}

          {usedFilters.includes('Load 5 first goods')
          && <GoodList goods={top5Goods} />}

          {usedFilters.includes('Load red goods')
          && <GoodList goods={redGoods} />}
        </div>
      </div>
    );
  }
}

export default App;
