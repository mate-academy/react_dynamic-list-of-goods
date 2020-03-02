import React from 'react';
import './App.css';
import { GoodsList } from './component/GoodsList/GoodsList';

interface AppIn {
  goodsFromServer?: {id: number; name: string; color: string}[];
}

// const goodsFromServer = [
//   'Dumplings',
//   'Carrot',
//   'Eggs',
//   'Ice cream',
//   'Apple',
//   'Bread',
//   'Fish',
//   'Honey',
//   'Jam',
//   'Garlic',
// ];

const goodsFromServer = [
  { "id": 1, "name": "Potato", "color": "red" },
  { "id": 2, "name": "Pear", "color": "green" },
  { "id": 3, "name": "Mellon", "color": "blue" },
  { "id": 4, "name": "Ice cream", "color": "red" },
  { "id": 5, "name": "Apple", "color": "green" },
  { "id": 6, "name": "Bread", "color": "blue" },
  { "id": 7, "name": "Fish", "color": "red" },
  { "id": 8, "name": "Honey", "color": "green" },
  { "id": 9, "name": "Jam", "color": "blue" },
  { "id": 10, "name": "Garlic", "color": "red" },
  { "id": 11, "name": "Dumplings", "color": "red" },
  { "id": 12, "name": "Carrot", "color": "green" },
  { "id": 13, "name": "Eggs", "color": "blue" },
];

export class App extends React.Component<AppIn> {
  state = {
    renderList: false,
  };

  renderGoodList = () => {
    this.setState({
      renderList: true,
    });
  };

  render() {
    return (
      <div>
        <h1>GoodList</h1>
        {
          this.state.renderList
            ? <GoodsList goodsFromServer={goodsFromServer} />
            : <button type="button" onClick={this.renderGoodList}>Start</button>
        }
      </div>
    );
  }
}
