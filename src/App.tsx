import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  preparedGoods: Good[];
  hasLoadingFalse: boolean;
  loading: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    preparedGoods: [],
    hasLoadingFalse: false,
    loading: false,
  };

  prepareGoods = async (getGoodsFromServer:() => Promise<Good[]>) => {
    this.setState({ loading: true, hasLoadingFalse: false });

    try {
      const GoodsFromServer = await getGoodsFromServer();

      this.setState({ preparedGoods: GoodsFromServer });
    } catch (error) {
      this.setState({ hasLoadingFalse: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { preparedGoods, loading, hasLoadingFalse } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <div>
          <button
            type="button"
            onClick={() => this.prepareGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            type="button"
            onClick={() => this.prepareGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.prepareGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {loading && (
          <span>Loading...</span>
        )}

        {hasLoadingFalse && (
          <span>Error</span>
        )}

        {preparedGoods.length > 0 && <GoodsList goods={preparedGoods} />}
      </>
    );
  }
}

export default App;
