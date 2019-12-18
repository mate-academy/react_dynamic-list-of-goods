import React from 'react';
import dataPromise from './goodsApi';

class GoodsList extends React.Component {
    state = {
      goods: [],
      isAllGoodsShow: false,
    };

    loadAllGoods = () => {
      dataPromise
        .then((data) => {
          this.setState(state => ({
            goods: data,
            isAllGoodsShow: !(state.isAllGoodsShow),
          }));
        });
    }

    load5FirstGoods = () => {
      dataPromise
        .then((data) => {
          this.setState({
            goods: data.slice(0, 5),
          });
        });
    }

    loadRedGoods = () => {
      dataPromise
        .then((data) => {
          this.setState({
            goods: data.filter(good => good.color === 'red'),
          });
        });
    }

    render() {
      const { goods, isAllGoodsShow } = this.state;

      return (
        <>
          { !isAllGoodsShow
          && (
            <button
              type="button"
              onClick={this.loadAllGoods}
            >
            Load goods
            </button>
          )
          }
          { isAllGoodsShow
        && (
        <>
          <button
            type="button"
            onClick={this.load5FirstGoods}
          >
            load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.loadRedGoods}
          >
            load red goods
          </button>
        </>
        )
          }
          <ul>
            {
              goods.map(good => (
                <li
                  key={good.id}
                  style={{ color: `${good.color}` }}
                >
                  {good.name}
                </li>
              ))
            }
          </ul>
        </>
      );
    }
}

export default GoodsList;
