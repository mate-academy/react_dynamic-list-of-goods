import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ goods }) => (
  <>
    {goods.map((good, i) => (
      <li
        key={good.id}
        style={{
          color: good.color,
        }}
        className="goods-list__good"
      >
        {good.name}
      </li>
    ))}
  </>
);

Good.propTypes = { goods: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Good;
