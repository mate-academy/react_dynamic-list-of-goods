import React from 'react';
import './App.css';
import GoodList from './GoodsList';
import { getGoods } from './api';

class App extends React.Component {
  state = {
    goods: [],
    isStart: false,
  }

  loadGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods,
          isStart: true,
        });
      });
  }

  fiveFirstGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods: goods.sort((a, b) => (a.name).localeCompare(b.name))
            .slice(0, 5),
        });
      });
  }

  redGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods: goods.filter(item => item.color === 'red'),
        });
      });
  }

  render() {
    const { goods } = this.state;

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
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
