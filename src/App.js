import React from 'react';
import GoodsList from './components/GoodsList';

import './App.scss';

import getResponse from './api/goods';

class App extends React.Component {
  state = {
    goodsList: [],
  }

  getALlGoods = () => {
    getResponse().then(goodsList => this.setState({ goodsList }));
  }

  getFirstFiveGoods = () => {
    getResponse().then((goodsList) => {
      const preparedList = goodsList
        .sort((g1, g2) => g1.name.localeCompare(g2.name))
        .slice(0, 6);

      this.setState({ goodsList: preparedList });
    });
  }

  getRedGoods = () => {
    getResponse().then((goodsList) => {
      const preparedList = goodsList
        .filter(good => good.color === 'red');

      this.setState({ goodsList: preparedList });
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList
          goodsList={this.state.goodsList}
          getALlGoods={this.getALlGoods}
          getFirstFiveGoods={this.getFirstFiveGoods}
          getRedGoods={this.getRedGoods}
        />
      </>
    );
  }
}

export default App;
