import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type Good = {
  id: number,
  name: string,
  color: string,
};

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  displayAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  displayFiveFirstGoods = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  displayRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="container">
        <button type="button" className="button" onClick={this.displayAllGoods}>All Goods</button>
        <button type="button" className="button" onClick={this.displayFiveFirstGoods}>Get 5 first</button>
        <button type="button" className="button" onClick={this.displayRedGoods}>get Red goods</button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
