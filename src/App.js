import React from 'react';
import 'bulma';
import './App.scss';
import { Buttons } from './components/Buttons/Buttons';
import { GoodList } from './components/GoodList/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = async(goods) => {
    this.setState({ goods });
  }

  render() {
    return (
      <div className="goods">
        <h1>Dynamic list of Goods</h1>
        <Buttons getGoods={this.getGoods} />
        <GoodList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
