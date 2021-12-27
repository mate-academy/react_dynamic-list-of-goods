import React from 'react';
import './App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Loader from 'react-loader-spinner';

import { GoodsList } from './components/GoodsList';
import { LoadingError } from './components/LoadingError';
import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
  isLoading: boolean,
  hasLoadingError: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    hasLoadingError: false,
  };

  loadData = async (getData: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
      hasLoadingError: false,
    });

    try {
      const goods = await getData();

      this.setState({
        goods,
        isLoading: false,
        hasLoadingError: false,
      });
    } catch {
      this.setState({
        hasLoadingError: true,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { goods, hasLoadingError, isLoading } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.loadData(getAll)}>Load All goods</button>
        <button type="button" onClick={() => this.loadData(get5First)}>Load 5 first goods</button>
        <button type="button" onClick={() => this.loadData(getRedGoods)}>Load red goods</button>
        <div>
          {hasLoadingError && <LoadingError /> }
          {!hasLoadingError && (isLoading
            ? <Loader type="Puff" color="#00BFFF" height={80} width={80} />
            : <GoodsList goods={goods} />)}
        </div>
      </>
    );
  }
}

export default App;
