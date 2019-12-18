import React from 'react';
import getGoods from './goodsApi';

class GoodsList extends React.Component {
  state = {
    goods: [],
    isStarted: false,
  }

  allGoodsFromServer = () => getGoods()
    .then(data => this.setState({
      goods: data,
    }));

  button = () => this.setState({ isStarted: true });

  render() {
    this.allGoodsFromServer();
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
          all goods
            </button>
          )}
      </>
    );
  }
}

export default GoodsList;
