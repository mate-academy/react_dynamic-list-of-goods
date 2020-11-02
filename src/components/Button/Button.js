import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ title, loadList, getData }) => (
  <button
    type="button"
    className="btn btn-info mx-2"
    onClick={() => loadList(getData)}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loadList: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};
