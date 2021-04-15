import React from 'react';
import { getAll, get5First, getRedGoods } from './goods';

export class ListGoods extends React.PureComponent {
  state = {
    listGoods: [],
  }

  addGood = async(loadGoods) => {
    const loadListGoods = await loadGoods();

    this.setState({
      listGoods: loadListGoods,
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.listGoods.map(ele => (
            <li key={ele.id} style={{ color: ele.color }}>{ele.name}</li>
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
