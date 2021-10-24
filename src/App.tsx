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

  loadAll = () => {
    getAll().then((data) => this.setState({ goods: data }));
  };

  load_5_First = () => {
    get5First().then((data) => this.setState({ goods: data }));
  };

  loadRed = () => {
    getRedGoods().then((data) => this.setState({ goods: data }));
  };

  render() {
    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>
        <Buttons
          loadAll={this.loadAll}
          load_5_First={this.load_5_First}
          loadRed={this.loadRed}
        />
        <GoodList goods={this.state.goods} />
      </div>
    );
  }
}
export default App;
