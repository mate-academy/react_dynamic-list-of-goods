import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';
import { ListGroup } from 'react-bootstrap';

export const GoodsList = ({ goods }) => (
  <ListGroup as="ul">
    {goods.map(good => <Good key={good.id} {...good} />)}
  </ListGroup>
)

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};
