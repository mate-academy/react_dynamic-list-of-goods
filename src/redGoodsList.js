import React from 'react';
import getGoods from './goodsApi';

class RedGoodsList extends React.Component {
  state = {
    goods: [],
    isStarted: false,
  }

  redGoodsFromServer = () => getGoods()
    .then(data => this.setState({
      goods: data.filter(good => good.color === 'red'),
    }));

  button = () => this.setState({ isStarted: true });

  render() {
    this.redGoodsFromServer();

    const { goods, isStarted } = this.state;

    return (

      <>
        {isStarted
          ? (
            <ul>
              {goods.map(item => (
                <li
                  className={item.color}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <button
              type="button"
              onClick={this.button}
              className="button"
            >
              red goods
            </button>
          )
        }
      </>
    );
  }
}

export default RedGoodsList;
