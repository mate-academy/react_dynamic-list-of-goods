import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ buttons }) => (
  <>
    {buttons.map(filter => (
      <button
        key={filter.title}
        className="button"
        type="button"
        onClick={filter.method}
      >
        {filter.title}
      </button>
    ))}
  </>
);

Filters.propTypes
  = {
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default Filters;
