import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <>
    <li
      key={good.id}
      style={{
        color: good.color,
      }}
      className="goods-list__good"
    >
      {good.name}
    </li>
  </>
);

Good.propTypes = { good: PropTypes.objectOf(PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
})).isRequired };

export default Good;
