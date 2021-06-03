import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    allGoods: null,
    fiveFirstGoods: null,
    onlyRedGoods: null,
  }

  componentDidMount() {
    getAll()
      .then(allGoods => this.setState({
        allGoods,
      }));
    get5First()
      .then(fiveFirstGoods => this.setState({
        fiveFirstGoods,
      }));
    getRedGoods()
      .then(onlyRedGoods => this.setState({
        onlyRedGoods,
      }));
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodsList
          allGoods={this.state.allGoods}
          fiveFirstGoods={this.state.fiveFirstGoods}
          onlyRedGoods={this.state.onlyRedGoods}
        />
      </div>
    );
  }
}

export default App;
