import React from 'react';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button/Button';

class App extends React.Component {
  state = {
    goods: [],
    isInitialized: false,
    isLoading: false,
  }

  loadGoods = async(loadCallback) => {
    this.setState({
      isLoading: true,
    });

    const goods = await loadCallback();

    this.setState({
      goods,
      isInitialized: true,
      isLoading: false,
    });
  }

  render() {
    const { goods, isInitialized, isLoading } = this.state;

    return (
      <>
        <Button
          handleClick={() => this.loadGoods(getAll)}
          name="Load all goods"
          isLoading={isLoading}
        />
        <Button
          handleClick={() => this.loadGoods(get5First)}
          name="Load 5 first goods"
          isLoading={isLoading}
        />
        <Button
          handleClick={() => this.loadGoods(getRed)}
          name="Load red goods"
          isLoading={isLoading}
        />
        {isInitialized && (<GoodsList goods={goods} />)}
      </>
    );
  }
}

export default App;
