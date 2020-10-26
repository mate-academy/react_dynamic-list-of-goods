import React from 'react';

import './App.scss';
import { GoodsList } from './Components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
state = {
  loadAllGoods: getAll,
  load5FirstGoods: get5First,
  loadRedGoods: getRedGoods,
  receivedGoods: [],
}

render() {
  const {
    loadAllGoods,
    load5FirstGoods,
    loadRedGoods,
    receivedGoods,
  } = this.state;

  return (
    <div>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => {
          loadAllGoods()
            .then((arrReceivedGoods) => {
              this.setState({ receivedGoods: arrReceivedGoods });
            });
        }}
      >
        All goods
      </button>
      <button
        type="button"
        onClick={() => {
          load5FirstGoods()
            .then((arrReceivedGoods) => {
              this.setState({ receivedGoods: arrReceivedGoods });
            });
        }}
      >
        Firts five goods
      </button>
      <button
        type="button"
        onClick={() => {
          loadRedGoods()
            .then((arrReceivedGoods) => {
              this.setState({ receivedGoods: arrReceivedGoods });
            });
        }}
      >
        All red goods
      </button>

      <GoodsList goodsList={receivedGoods} />
    </div>

  );
}
}

export default App;
