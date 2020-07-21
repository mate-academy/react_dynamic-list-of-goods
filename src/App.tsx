import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './types';
import { loadGoods } from './api';

interface State {
  goods: Good[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  componentDidMount() {
    loadGoods()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

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
