import React from 'react';
import './GoodsList.scss';

class GoodsList extends React.Component {
  state = {
    products: this.props.allGoods,
    isVisible: false,
  };

  showAllGoods = () => {
    this.setState({
      products: this.props.allGoods,
      isVisible: true,
    });
  }

  show5FirstOnly = () => {
    this.setState({
      products: this.props.fiveFirstGoods,
      isVisible: true,
    });
  }

  showRedOnly = () => {
    this.setState({
      products: this.props.onlyRedGoods,
      isVisible: true,
    });
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
