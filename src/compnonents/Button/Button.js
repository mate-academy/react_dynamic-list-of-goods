import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  state = {
    isLoading: false,
  }

  getGoodsFromServer = async() => {
    const { getGoods, setGoods, ifError } = this.props;

    this.setState({ isLoading: true });

    try {
      const goods = await getGoods();

      setGoods(goods);

      this.setState({ isLoading: false });
    } catch (e) {
      ifError();
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { children, className } = this.props;
    const { isLoading } = this.state;

    return (
      <button
        onClick={this.getGoodsFromServer}
        className={className || `btn btn-primary ml-3`}
        type="button"
      >
        {isLoading
          ? (
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            />
          ) : children}
      </button>
    );
  }
}

Button.propTypes = {
  getGoods: PropTypes.func.isRequired,
  setGoods: PropTypes.func.isRequired,
  ifError: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
