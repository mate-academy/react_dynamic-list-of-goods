import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodList from './Components/GoodList';
import Buttons from './Components/Buttons';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  setGoods = (goods: Good[]) => {
    this.setState({ goods });
  };

  loadAll = () => {
    getAll().then(this.setGoods);
  };

  load5First = () => {
    get5First().then(this.setGoods);
  };

  loadRed = () => {
    getRedGoods().then(this.setGoods);
  };

  render() {
    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>
        <Buttons
          loadAll={this.loadAll}
          load5First={this.load5First}
          loadRed={this.loadRed}
        />
        <GoodList goods={this.state.goods} />
      </div>
    );
  }
}
export default App;
