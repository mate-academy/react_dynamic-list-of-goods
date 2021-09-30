import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goods: Good[];
  hasLoadingError: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    hasLoadingError: false,
  };

  loadGoods = async (loadQuery: () => Promise<Good[]>) => {
    try {
      const goods = await loadQuery();

      this.setState({ goods });
    } catch (error) {
      this.setState({ hasLoadingError: true });
    }
  };

  render() {
    const { goods, hasLoadingError } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        {goods.length > 0
         && <GoodsList goods={goods} />}
        {hasLoadingError
          && <h2>Something went wrong...</h2>}
        <Button
          text="Load all goods"
          onLoad={() => this.loadGoods(getAll)}
        />
        <Button
          text="Load 5 first goods"
          onLoad={() => this.loadGoods(get5First)}
        />
        <Button
          text="Load red goods"
          onLoad={() => this.loadGoods(getRedGoods)}
        />
      </div>
    );
  }
}

export default App;
