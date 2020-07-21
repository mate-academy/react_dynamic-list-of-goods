import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './types';

const goodsFromServer = [
  { id: 1, name: 'Potato', color: 'red' },
  { id: 1, name: 'Pear', color: 'green' },
  { id: 1, name: 'Mellon', color: 'blue' },
];

interface State {
  goods: Good[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
