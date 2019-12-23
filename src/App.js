import React from 'react';
import './App.css';
import GoodList from './GoodsList';
import getGoods from './Api';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  };

  fiveFirstGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods: goods.sort((a, b) => (a.name).localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods: goods.filter(item => item.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <section>
          <button
            type="button"
            onClick={this.loadGoods}
          >
            Load
          </button>
          <button
            onClick={this.fiveFirstGoods}
            type="button"
          >
            5 first goods
          </button>
          <button
            type="button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </section>
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
