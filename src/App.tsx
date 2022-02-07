import React from 'react';
import './App.scss';
import { GoodsButtons } from './components/GoodsButtons';
import { GoodsList } from './components/GoodsList';

type Props = {};

type State = {
  goods: Good[],
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Dynamic list of goods
        </h1>

        <GoodsButtons loadGoods={this.loadGoods} />

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
