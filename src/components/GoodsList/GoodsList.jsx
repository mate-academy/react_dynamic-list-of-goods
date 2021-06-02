import React from 'react';
import './GoodsList.scss';

class GoodsList extends React.Component {
  state = {
    products: null,
    isVisible: false,
  };

  showAllGoods = () => {
    this.props.getAll()
      .then(goods => this.setState(
        prevState => ({
          products: goods,
          isVisible: !prevState.isVisible,
        })
      ))
  }

  show5FirstOnly = () => {
    this.props.get5First()
      .then(goods => this.setState(
        prevState => ({
          products: goods,
          isVisible: !prevState.isVisible,
        })
      ))
  }

  showRedOnly = () => {
    this.props.getRedGoods()
      .then(goods => this.setState(
        prevState => ({
          products: goods,
          isVisible: !prevState.isVisible,
        })
      ))
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.show5FirstOnly}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.showRedOnly}
        >
          Load red goods
        </button>
        {this.state.isVisible && (
        <ul>
          {this.state.products.map(
            product => (
              <li
                key={product.id}
                className={product.color}
              >
                {product.name}
                {' '}
                {product.color}
              </li>
            )
          )}
        </ul>
        )}
      </div>
    );
  };
}

export default GoodsList;
