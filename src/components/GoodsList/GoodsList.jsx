import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export const GoodsList = ({ products }) => (
  <List>
    {products.map(product => (
      <div key={product.id}>
        <ListItem
          style={{ color: product.color }}
        >
          {product.name}
        </ListItem>
        <Divider />
      </div>
    ))}
  </List>
);

GoodsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
