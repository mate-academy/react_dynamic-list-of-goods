import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    isLoadingGoods: false,
    hasError: false,
    goods: [],
  }

  loadGoods = async(loading) => {
    this.setState({
      isLoadingGoods: true,
      hasError: false,
    });

    try {
      const loadedGoods = await loading();

      this.setState({
        isLoadingGoods: false,
        goods: loadedGoods,
      });
    } catch (error) {
      this.setState({
        isLoadingGoods: false,
        hasError: true,
      });
    }
  }

  render() {
    const { isLoadingGoods, goods, hasError } = this.state;

    return (
      <div className="container-fluid">
        <h1 className="display-4 lead mb-3">Dynamic list of Goods</h1>

        <Button
          isLoadingGoods={isLoadingGoods}
          startLoad={() => this.loadGoods(getAll)}
          buttonText="Load Goods"
        />
        <Button
          isLoadingGoods={isLoadingGoods}
          startLoad={() => this.loadGoods(get5First)}
          buttonText="Load 5 Goods"
        />
        <Button
          isLoadingGoods={isLoadingGoods}
          startLoad={() => this.loadGoods(getRedGoods)}
          buttonText="Load Red Goods"
        />

        {
          hasError
            ? (
              <div className="alert alert-danger mt-3 col-4" role="alert">
                Something went wrong!
              </div>
            ) : (
              <GoodsList goods={goods} />
            )
        }
      </div>
    );
  }
}

export default App;
