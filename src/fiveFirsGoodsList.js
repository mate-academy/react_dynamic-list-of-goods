import React from 'react';
import getGoods from './goodsApi';

class FiveFirstGoodsList extends React.Component {
  state = {
    goods: [],
    isStarted: false,
  }

  fiveGoodsFromServer = () => getGoods()
    .then(data => this.setState({
      goods: [...data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5)],
    }));

  button = () => this.setState({ isStarted: true });

  render() {
    this.fiveGoodsFromServer();

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
            first 5 goods
            </button>
          )
        }
      </>
    );
  }
}

export default FiveFirstGoodsList;
