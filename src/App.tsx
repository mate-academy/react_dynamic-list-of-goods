import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

export interface State {
  goods: Good[],

}

export class App extends React.Component {
  state = {
    goods: [],
  };

  handleClick = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods })
  }

  render() {
    return (
      <div className="container">
        Dynamic list of goods
        <div>
          <button
            className="button"
            type="button"
            onClick={() => this.handleClick(getAll)}
          >
            show all
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.handleClick(get5First)}
          >
            show first 5
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.handleClick(getRed)}
          >
            show red ones
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
