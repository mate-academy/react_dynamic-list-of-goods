import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import './App.scss';

export class App extends React.Component {
  state = {
    visibleGoods: [],
  }

  handleClick = async(callback) => {
    const visibleGoods = await callback();

    this.setState({ visibleGoods });
  }

  render() {
    const { visibleGoods } = this.state;

    return (
      <>
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={() => {
              this.handleClick(getAll);
            }}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              this.handleClick(get5First);
            }}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              this.handleClick(getRedGoods);
            }}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={visibleGoods} />
      </>
    );
  }
}
