import React from 'react';
import { GoodsList } from './components/GoodsList';
import { GetAll } from './components/GetAll';
import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = () => {
    GetAll()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  getFiveFirstGoods = () => {
    GetAll()
      .then(
        result => result
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 5),
      )
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  getRedGoods = () => {
    GetAll()
      .then(result => result.filter(goods => goods.color === 'red'))
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.getGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.getFiveFirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.getRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
