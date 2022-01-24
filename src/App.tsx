import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodList/GoodsList';
import Error from './components/ErrorMessage/ErrorMessage';

type State = {
  goods: Good[],
  isLoading: boolean,
  error: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    error: false,
  };

  loadHandler = async (callback: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
    });

    try {
      this.setState({
        goods: await callback(),
      });
    } catch {
      this.setState({ error: true });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { goods, isLoading, error } = this.state;

    return (
      <div className="App">
        <div className="button-wrapper">
          <button
            type="button"
            onClick={() => this.loadHandler(getAll)}
          >
            All goods
          </button>
          <button
            type="button"
            onClick={() => this.loadHandler(get5First)}
          >
            First 5
          </button>
          <button
            type="button"
            onClick={() => this.loadHandler(getRedGoods)}
          >
            get Red
          </button>
        </div>
        {error && <Error />}
        {!error && (isLoading
          ? <div>Loading Data...</div>
          : <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
