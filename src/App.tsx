import React from 'react';
import { GoodsList } from './components/GoodsList';
import { getGoods } from './api/getGoods';
import './App.css';

interface State {
  goods: Good[];
  isLoaded: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoaded: false,
  };

  loadAll = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods,
          isLoaded: true,
        });
      });
  };

  loadFirstFiveGoods = () => {
    getGoods()
      .then(goods => this.setState({
        goods: goods
          .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
          .splice(0, 5),
        isLoaded: true,
      }));
  };

  loadRedGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .filter((good: Good) => good.color === 'red'),
          isLoaded: true,
        });
      });
  };

  render() {
    const { goods, isLoaded } = this.state;

    return (
      <div className="container-fluid">
        <h1>Goods</h1>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={this.loadAll}
        >
          Load all goods
        </button>
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={this.loadFirstFiveGoods}
        >
          Load first five goods
        </button>
        <button
          className="btn btn-outline-danger"
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
            <p>Press the button!</p>
          )}
      </div>
    );
  }
}

export default App;
