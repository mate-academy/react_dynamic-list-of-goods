import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => {
  if (goodsList.length === 0) {
    return (
      <>
        <p>Please press the load button</p>
        <i>
          P.S. If you will click the button,
          but still don&apos;t see the list of products,
          then they are not there.
        </i>
      </>
    );
  }

  return (
    <ul>
      {goodsList.map(({ id, color, name }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
};
