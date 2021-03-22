import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  loadGoods = () => {
    const { onClick, callback } = this.props;

    onClick(callback);
  };

  render() {
    const { name } = this.props;
    return (
      <button
        type="button"
        onClick={this.loadGoods}
      >
        {name}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
