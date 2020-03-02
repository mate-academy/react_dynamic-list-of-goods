import React from 'react';
import './App.css';
import { getGoods } from './GoodsApi';
import { GoodsList } from './components/GoodsList';

interface MyState {
  goods: Good[];
}

interface Good {
  id: number;
  name: string;
  color: string;
}

class App extends React.Component<{}, MyState> {
  state: MyState = {
    goods: [],
  };

  handleClickAllGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
    }));
  };

  handleClickFirstFive = () => {
    getGoods().then(goods => this.setState({
      goods: goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .splice(0, 5),
    }));
  };

  handleClickOnlyRed = () => {
    getGoods().then(goods => this.setState({
      goods: goods.filter((good: Good) => good.color === 'red'),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container is-fluid">
        <h1 className="title">List of goods</h1>
        <GoodsList
          goods={goods}
          handleClickAllGoods={this.handleClickAllGoods}
          handleClickFirstFive={this.handleClickFirstFive}
          handleClickOnlyRed={this.handleClickOnlyRed}
        />
      </div>
    );
  }
}

export default App;
