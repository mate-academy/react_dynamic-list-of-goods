import React from 'react';
import { getItems } from './Api';
import { GoodList } from './GoodsList';
import { Items } from './Interfaces';
import './App.css';

class App extends React.Component {
  state = {
    goods: [],
    isVisible: false,
  };

  loadingItems = () => {
    this.setState({ isVisible: true });

    getItems()
      .then(goods => {
        this.setState({ goods, isVisible: false });
      });
  };

  loadingFiveSortAlphabetItems = () => {
    this.setState({ isVisible: true });

    getItems()
      .then(goods => {
        this.setState({
          goods: goods.sort((a: Items, b: Items) => a.name.localeCompare(b.name)).slice(0, 5),
          isVisible: false,
        });
      });
  };

  loadingRedItems = () => {
    this.setState({ isVisible: true });

    getItems()
      .then(goods => {
        this.setState({
          goods: goods.filter((good: Items) => good.color === 'red'),
          isVisible: false,
        });
      });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="main">
        <h1 className="title">List of Goods</h1>
        <div className="buttons-block">
          <button
            type="button"
            className="button"
            onClick={this.loadingItems}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.loadingFiveSortAlphabetItems}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={() => this.loadingRedItems()}
          >
            Load red goods
          </button>
        </div>
        {isVisible
          ? <p>Loading...</p>
          : <GoodList goods={this.state.goods} />}
      </div>
    );
  }
}

export default App;
