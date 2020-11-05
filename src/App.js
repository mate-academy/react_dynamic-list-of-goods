import React, { PureComponent } from 'react';
import GoodsList from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import Button from './components/Button';
// eslint-disable-next-line max-len

class App extends PureComponent {
  state = {
    goodsToRender: null,
  }

  renderGoods = () => {
    getAll().then(goods => this.setState({ goodsToRender: goods }));
  }

  getRedsGoods = () => {
    getRedGoods().then(goods => this.setState({ goodsToRender: goods }));
  }

  getSortedGoods = () => {
    get5First().then(goods => this.setState({ goodsToRender: goods }));
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="ui buttons">
          <Button
            handler={this.renderGoods}
            buttonName="Load All goods"
          />
          <Button
            handler={this.getSortedGoods}
            buttonName="Load 5 first goods"
          />
          <Button
            handler={this.getRedsGoods}
            buttonName="Load red goods"
          />
        </div>
        {this.state.goodsToRender
        && (
          <GoodsList
            goods={this.state.goodsToRender}
          />
        )
        }
      </div>
    );
  }
}

export default App;
