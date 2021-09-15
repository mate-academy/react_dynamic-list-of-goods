import React from 'react';
import { GoodsList } from './component/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  users: Good[],
  errorMessage: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    users: [],
    errorMessage: '',
  };

  getUsers = async (getLoadingUsers: () => Promise<Good[]>) => {
    try {
      const users = await getLoadingUsers();

      this.setState({ users, errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: 'Loading goods' });
    }
  };

  render() {
    const { users, errorMessage } = this.state;

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

        {!errorMessage ? (
          <GoodsList users={users} />
        ) : errorMessage}
      </div>
    );
  }
}

export default App;
