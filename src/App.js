import React from 'react';
import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = (getGoods) => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  };

  render() {
    const { goods } = this.state;
    const { loadGoods } = this;

    return (
      <div className="App container card">
        <h1 className="d-flex justify-content-center display-4 mb-4">
          Dynamic list of Goods
        </h1>

        <Buttons onLoad={loadGoods} />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
