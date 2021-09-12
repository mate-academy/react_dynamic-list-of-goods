import React from 'react';
import { Buttons } from './components/Buttons';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  showAll = async () => {
    const all = await getAll();

    this.setState({
      goods: all,
    });
  };

  show5First = async () => {
    const fiveFirst = await get5First();

    this.setState({
      goods: fiveFirst,
    });
  };

  showRedGoods = async () => {
    const redGoods = await getRedGoods();

    this.setState({
      goods: redGoods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <Buttons
          showAll={this.showAll}
          show5First={this.show5First}
          showRedGoods={this.showRedGoods}
        />
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
