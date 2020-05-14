import React from 'react';
import './App.css';
import { API } from './API';
import GoodsItem from './GoodsItem';

type AppState = {
  listOfGood: Goods[];
};
type AppProps = {};
class App extends React.Component<AppProps, AppState> {
  state = {
    listOfGood: [],
  };

  showAll = () => (
    API.then(data => (
      this.setState({
        listOfGood: data,
      })
    ))
  );

  firstFive = () => (
    API.then(data => (
      this.setState({
        listOfGood: data.sort((a: Goods, b: Goods) => (a.name.localeCompare(b.name))).slice(0, 5),
      })
    ))
  );

  onlyRed = () => (
    API.then(data => (
      this.setState({
        listOfGood: data.filter((good: Goods) => (good.color === 'red')),
      })
    ))
  );

  render() {
    const { listOfGood } = this.state;

    return (
      <>
        <ul>
          {listOfGood.map(({ id, name, color }) => (
            <GoodsItem
              id={id}
              name={name}
              color={color}
            />
          ))}
        </ul>
        <button
          type="button"
          onClick={this.showAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.firstFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.onlyRed}
        >
          Load red goods
        </button>
      </>
    );
  }
}
export default App;
