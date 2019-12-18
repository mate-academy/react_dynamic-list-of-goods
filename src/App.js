import React from 'react';
import './App.css';
import GoodList from './GoodsList';
import { getGoods } from './api';

class App extends React.Component {
  state = {
    good: [],
    isStart: false,
  }

  loadGoods = () => {
    getGoods()
      .then((good) => {
        this.setState({
          good,
          isStart: true,
        });
      });
  }

  fiveFirstGoods = () => {
    getGoods()
      .then((good) => {
        this.setState({
          good: good.slice(0, 5),
        });
      });
  }

  redGoods = () => {
    getGoods()
      .then((good) => {
        this.setState({
          good: good.filter(item => item.color === 'red'),
        });
      });
  }

  render() {
    const { good } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.isStart ? (
          <section>
            <button
              onClick={this.fiveFirstGoods}
              type="button"
            >
5 first goods
            </button>
            <button
              type="button"
              onClick={this.redGoods}
            >
Load red goods
            </button>
          </section>
        )
          : (
            <button
              type="button"
              onClick={this.loadGoods}
            >
Load
            </button>
          )}
        <GoodList good={good} />
      </div>
    );
  }
}

export default App;
