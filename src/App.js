import React from 'react';
import './App.css';
import { getGoods } from './GoodsApi';
import GoodsList from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
    visibleAll: true,
    visibleFive: true,
    visibleRed: true,
  }

  toFillAllGoods = () => {
    const dataPromise = getGoods();

    dataPromise.then(data => this.setState({
      goods: data,
      visibleAll: false,
      visibleFive: true,
      visibleRed: true,
    }));
  }

  toFillFiveGoods = () => {
    const dataPromise = getGoods();

    dataPromise.then(data => this.setState({
      goods: data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      visibleFive: false,
      visibleRed: true,
      visibleAll: true,
    }));
  }

  toFillRedGoods = () => {
    const dataPromise = getGoods();

    dataPromise.then(data => this.setState({
      goods: data.filter(item => item.color === 'red'),
      visibleRed: false,
      visibleAll: true,
      visibleFive: true,
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Goods</h1>
        <div className="App">
          <div>
            {this.state.visibleAll
              ? (
                <button
                  type="button"
                  onClick={this.toFillAllGoods}
                >
                Load goods
                </button>
              )
              : <GoodsList goods={goods} />
            }
          </div>

          <div>
            {this.state.visibleFive
              ? (
                <button
                  type="button"
                  onClick={this.toFillFiveGoods}
                >
                Load 5 first goods
                </button>
              )
              : <GoodsList goods={goods} />
            }
          </div>

          <div>
            {this.state.visibleRed
              ? (
                <button
                  type="button"
                  onClick={this.toFillRedGoods}
                >
                Load red goods
                </button>
              )
              : <GoodsList goods={goods} />
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;
