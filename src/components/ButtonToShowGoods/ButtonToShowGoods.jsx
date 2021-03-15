import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonToShowGoods = ({ text, onClick }) => (
  <Button
    content={text}
    onClick={onClick}
  />
);

ButtonToShowGoods.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
