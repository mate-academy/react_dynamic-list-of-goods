import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      className="ui button"
      onClick={props.handler}
      type="button"
    >
      {props.buttonName}
    </button>
  );
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired
};

export default Button;
