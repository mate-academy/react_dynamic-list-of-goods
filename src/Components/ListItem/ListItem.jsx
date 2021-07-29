import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ListItem = ({ list }) => (
  <>
    {list.map(goods => (
      <ListGroup.Item
        key={goods.id}
        style={{ color: goods.color }}
      >
        {goods.name}
      </ListGroup.Item>
    ))}
  </>
);

ListItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape([
    PropTypes.object,
  ])).isRequired,
};
