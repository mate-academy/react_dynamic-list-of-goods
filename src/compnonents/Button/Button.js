import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  state = {
    isLoading: false,
  }

  loadData = async() => {
    this.setState({ isLoading: true });
    await this.props.getGoods();

    this.setState({ isLoading: false });
  }

  render() {
    const { children, className } = this.props;
    const { isLoading } = this.state;

    return (
      <button
        onClick={this.loadData}
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
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
