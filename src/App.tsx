import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
  listIsVisible: boolean,
  isLoading: boolean,
  errorMessage: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    listIsVisible: false,
    isLoading: false,
    errorMessage: '',
  };

  loadGoodsFromServer = async (getServerData: () => Promise<Good[]>) => {
    this.setState({ goods: [], listIsVisible: true, isLoading: true });

    try {
      const goods = await getServerData();

      this.setState({ goods: [...goods], isLoading: false });
    } catch (error) {
      this.setState({ errorMessage: 'No goods were found...', isLoading: false });
    }
  };

  render() {
    const {
      goods, listIsVisible, isLoading, errorMessage,
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
        {listIsVisible && <GoodsList goods={goods} isLoading={isLoading} />}
        {errorMessage && <p>{errorMessage}</p>}
      </>
    );
  }
}

export default App;
