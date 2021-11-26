import React from 'react';
import './App.scss';
import GoodsList from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface Good {
  id: number;
  name: string;
  color: string;
}

type State = {
  users: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    users: [],
  };

  getItem = async (goods: () => Promise<Good[]>) => {
    const users = await goods();

    this.setState({ users });
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getItem(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.getItem(get5First)}
        >
          Load 5 goods
        </button>
        <button
          type="button"
          onClick={() => this.getItem(getRedGoods)}
        >
          Load Red goods
        </button>
        <GoodsList users={users} />
      </>
    );
  }
}

export default App;
