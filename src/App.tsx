import React from 'react';
import './App.scss';
import cn from 'classnames';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

interface State {
  goods: Good[];
}
class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleGettingGoods = async (optionCallback: () => Promise<Good[]>) => {
    const goods = await optionCallback();

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <div className={cn('goods')}>
          <div className={cn('buttons')}>
            <button
              type="button"
              className={cn('button')}
              onClick={() => this.handleGettingGoods(getAll)}
            >
              Get All
            </button>
            <button
              type="button"
              className={cn('button')}
              onClick={() => this.handleGettingGoods(get5First)}
            >
              Get Five First
            </button>
            <button
              type="button"
              className={cn('button button--red')}
              onClick={() => this.handleGettingGoods(getRedGoods)}
            >
              Get red goods
            </button>
          </div>
          {!!this.state.goods.length && (
            <GoodsList goods={this.state.goods} />
          )}
        </div>
      </>
    );
  }
}

export default App;
