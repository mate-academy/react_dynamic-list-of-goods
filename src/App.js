import React from 'react';
import './App.scss';
import { GoodList } from './GoodList';

import { getAll } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
    visibleGoods: false,
  }

  render() {
    const { goods, visibleGoods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => getAll()
            .then((goodsFromServer) => {
              this.setState({
                goods: goodsFromServer,
                visibleGoods: true,
              });
            })}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => getAll()
            .then((goodsFromServer) => {
              this.setState({
                goods: goodsFromServer
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .slice(0, 5),
                visibleGoods: true,
              });
            })
          }
        >
          Load 5 goods
        </button>

        <button
          type="button"
          onClick={() => getAll()
            .then((goodsFromServer) => {
              this.setState({
                goods: goodsFromServer
                  .filter(good => good.color === 'red'),
                visibleGoods: true,
              });
            })
          }
        >
          Load red goods
        </button>

        {visibleGoods && (
          <GoodList
            goods={goods}
          />
        )
        }
      </>
    );
  }
}

export default App;
