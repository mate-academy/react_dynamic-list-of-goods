import React from 'react';
import './App.scss';
import { GoodsButtons } from './components/GoodsButtons';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[],
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App_title title">Dynamic list of Goods</h1>
        <GoodsButtons loadGoods={this.loadGoods} />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
