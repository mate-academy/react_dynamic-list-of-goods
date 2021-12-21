import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { LoadingError } from './components/LoadingError/LoadingError';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
  isLoading: boolean,
  hasLoadingError: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    hasLoadingError: false,
  };

  loadData = async (getData: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
    });

    try {
      const goods = await getData();

      this.setState({
        goods,
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
        <div className="App">
          <h1 className="title">Goods</h1>
          <div className="buttons">
            <button
              type="button"
              className="buttons__btn buttons__btn--allGoods"
              onClick={() => this.loadData(getAll)}
            >
              All
            </button>
            <button
              type="button"
              className="buttons__btn buttons__btn--fiveGoods"
              onClick={() => this.loadData(get5First)}
            >
              5
            </button>
            <button
              type="button"
              className="buttons__btn buttons__btn--redGoods"
              onClick={() => this.loadData(getRedGoods)}
            >
              red
            </button>
          </div>
          <div>
            {hasLoadingError && <LoadingError /> }
            {!hasLoadingError && (isLoading
              ? <div className="goodsList__loader">Loading...</div>
              : <div className="goodsList__list"><GoodsList goods={goods} /></div>)}
          </div>
        </div>
      </>
    );
  }
}

export default App;
