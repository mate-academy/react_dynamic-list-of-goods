import React from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList';
import { loadGoods, get5First, getRedGoods } from './api/goods';

type Goods = {
  id: number,
  name: string,
  color: string,
};

interface State {
  goods: Goods[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  async componentDidMount() {
    const goods = await loadGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title background">List of goods</h1>
        <div className="App__list background">
          <div className="button__container">
            <button
              type="button"
              className="button"
              onClick={() => {
                loadGoods().then(listOfGoods => {
                  this.setState({ goods: listOfGoods });
                });
              }}
            >
              Show all goods
            </button>
            <button
              type="button"
              className="button"
              onClick={() => {
                get5First().then(listOfGoods => {
                  this.setState({ goods: listOfGoods });
                });
              }}
            >
              Show first five
            </button>
            <button
              type="button"
              className="button"
              onClick={() => {
                getRedGoods().then(listOfGoods => {
                  this.setState({ goods: listOfGoods });
                });
              }}
            >
              Show only red
            </button>
          </div>
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;
