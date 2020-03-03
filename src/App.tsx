import React from 'react';
import { GoodList } from './components/GoodsList';
import { getGoods } from './getGoods';
import './App.css';

interface State {
  goods: Goods[];
  minLength: number;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    minLength: 1,
  };

  handleStart = () => {
    getGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  handleFirstFive = async () => {
    const goods = await getGoods();
    const fivesGoods = goods.slice(0, 5);

    this.setState({
      goods: fivesGoods,
    });
  };

  handleColorGoods = async () => {
    const goods = await getGoods();
    const fivesGoods = goods.filter((good: any) => good.color === 'red');

    this.setState({
      goods: fivesGoods,
    });
  };

  render() {
    const { goods, minLength } = this.state;

    return (
      <>
        <button type="button" onClick={this.handleStart}>Load All goods</button>
        <button type="button" onClick={this.handleFirstFive}>Load 5 first goods</button>
        <button type="button" onClick={this.handleColorGoods}>Load red goods</button>
        <GoodList
          goods={goods}
          minLength={minLength}
        />
      </>
    );
  }
}

export default App;
