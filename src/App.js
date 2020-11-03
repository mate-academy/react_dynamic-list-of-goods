import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import { GoodList } from './components/GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';

class App extends React.PureComponent {
  state = {
    goods: [],
    isInitialized: false,
    hasLoadingError: false,
  }

  loadGoods = async(fetch) => {
    try {
      this.setState({ hasLoadingError: false });

      const allGoods = await fetch();

      this.setState({
        goods: allGoods,
        isInitialized: true,
      });
    } catch (error) {
      this.setState({
        hasLoadingError: true,
      });
    }
  }

  render() {
    const {
      state: { goods, isInitialized, hasLoadingError },
      loadGoods,
    } = this;

    return (
      <section className="goods">
        <h1>Dynamic list of Goods</h1>

        <div className="mb-2">
          <Button
            onClick={() => loadGoods(getAll)}
            text="Load All goods"
          />
          <Button
            onClick={() => loadGoods(get5First)}
            text="Load 5 first goods"
          />
          <Button
            onClick={() => loadGoods(getRedGoods)}
            text="Load red goods"
          />
        </div>

        {hasLoadingError && (
          <div className="alert alert-danger">
            An error occured when loading users!
          </div>
        )}

        { isInitialized && <GoodList goods={goods} /> }
      </section>
    );
  }
}

export default App;
