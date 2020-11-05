import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Button } from './api/components/Button';
import { GoodsList } from './api/components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
    initialized: false,
    loading: false,
  }

  loadGoods = async(loadCallback) => {
    this.setState({
      loading: true,
    });

    const goods = await loadCallback();

    this.setState({
      goods,
      initialized: true,
      loading: false,
    });
  }

  render() {
    const { goods, initialized, loading } = this.state;

    return (
      <>
        <Button
          handleClick={() => this.loadGoods(getAll)}
          name="Load all goods"
          isLoading={loading}
        />
        <Button
          handleClick={() => this.loadGoods(get5First)}
          name="Load 5 first goods"
          isLoading={loading}
        />
        <Button
          handleClick={() => this.loadGoods(getRed)}
          name="Load red goods"
          isLoading={loading}
        />
        {initialized && (<GoodsList goods={goods} />)}
      </>
    );
  }
}

export default App;
