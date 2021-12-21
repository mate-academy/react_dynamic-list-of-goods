import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
  listIsVisible: boolean,
  isLoading: boolean,
  errorMessage: string,
  hasError: boolean,
  loadingMessage: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    listIsVisible: false,
    isLoading: false,
    errorMessage: '',
    hasError: false,
    loadingMessage: 'Loading in progress',
  };

  loadGoodsFromServer = async (getServerData: () => Promise<Good[]>) => {
    this.setState({ goods: [], isLoading: true });

    try {
      const goods = await getServerData();

      this.setState({ goods: [...goods], isLoading: false, listIsVisible: true });
    } catch (error) {
      this.setState({ errorMessage: 'No goods were found...', isLoading: false, hasError: true });
    }
  };

  render() {
    const {
      goods, listIsVisible, isLoading, errorMessage, hasError, loadingMessage,
    } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="submit" onClick={() => this.loadGoodsFromServer(getAll)}>
          Load All goods
        </button>
        <button type="submit" onClick={() => this.loadGoodsFromServer(get5First)}>
          Load 5 first goods
        </button>
        <button type="submit" onClick={() => this.loadGoodsFromServer(getRedGoods)}>
          Load red goods
        </button>
        <br />
        {!hasError && (isLoading
          ? loadingMessage
          : listIsVisible && <GoodsList goods={goods} />)}
        {hasError && (errorMessage && <p>{errorMessage}</p>)}
      </>
    );
  }
}

export default App;
