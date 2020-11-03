import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

export const Good = ({ name, color }) => (
  <ListGroup.Item as="li" style={{ color: color }}>
    {name}
  </ListGroup.Item>
)

Good.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
