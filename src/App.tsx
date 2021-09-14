import React from 'react';
import { GoodsList } from './component/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  users: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    users: [],
  };

  getUsers = async (getLoadingUsers: () => Promise<Good[]>) => {
    const users = await getLoadingUsers();

    this.setState({ users });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="btn-group">
          <button
            type="button"
            className="App__btn btn btn-secondary"
            onClick={() => this.getUsers(getAll)}
          >
            All goods
          </button>
          <button
            type="button"
            className="App__btn btn btn-secondary"
            onClick={() => this.getUsers(get5First)}
          >
            5 first goods
          </button>
          <button
            type="button"
            className="App__btn btn btn-secondary"
            onClick={() => this.getUsers(getRedGoods)}
          >
            Red goods
          </button>
        </div>

        <GoodsList users={users} />
      </div>
    );
  }
}

export default App;
