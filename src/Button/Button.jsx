import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  render() {
    const { name, onLoad } = this.props;
    return (
      <button
        type="button"
        onClick={onLoad}
      >
        {name}
      </button>
    )
  }
}

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
