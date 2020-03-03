import React from 'react';
import './App.css';

import { getGoods } from './api';
import { GoodsList } from './components/GoodList/Goodlist';

interface State {
  renderList: boolean;
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    renderList: false,
    goods: [],
  };

  handleClickStart = () => {
    getGoods()
      .then(goods => {
        this.setState({
          renderList: true,
          goods,
        });
      });
  };

  handleAllGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          renderList: true,
          goods,
        });
      });
  };

  handleClickFive = () => {
    getGoods()
      .then(goods => {
        this.setState({
          renderList: true,
          goods: goods
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  handleRedGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          renderList: true,
          goods: goods.filter((good: Good) => good.color === 'red'),
        });
      });
  };

  render() {
    const {
      renderList,
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {renderList
          ? (
            <GoodsList
              goods={goods}
              handleAllGoods={this.handleAllGoods}
              handleClickFive={this.handleClickFive}
              handleRedGoods={this.handleRedGoods}
            />
          )
          : (
            <button
              type="button"
              className="button"
              onClick={this.handleClickStart}
            >
              Load goods
            </button>
          )}
      </div>
    );
  }
}

export default App;
