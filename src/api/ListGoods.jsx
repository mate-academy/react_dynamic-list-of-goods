import React from 'react';
import { getAll, get5First, getRedGoods } from './goods';

export class ListGoods extends React.PureComponent {
  state = {
    listGoods: [],
  }

  addGood = async(loadGoods) => {
    const loadedListGoods = await loadGoods();

    this.setState({
      listGoods: loadedListGoods,
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.listGoods.map(good => (
            <li key={good.id} style={{ color: good.color }}>{good.name}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            this.addGood(getAll);
          }}
        >
          getAll
        </button>
        <button
          type="button"
          onClick={() => {
            this.addGood(get5First);
          }}
        >
          get5First
        </button>
        <button
          type="button"
          onClick={() => {
            this.addGood(getRedGoods);
          }}
        >
          getRedGoods
        </button>
      </>
    );
  }
}
