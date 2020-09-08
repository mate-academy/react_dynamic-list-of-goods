import React from 'react';
import PropTypes from 'prop-types';

const GooodList = ({ data }) => {
  if (!data) {
    return <></>;
  }

  return (
    <ul>
      {
        data.map(item => (
          <li key={item.id} style={{ color: item.color }}>{item.name}</li>
        ))
      }
    </ul>
  );
};

GooodList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default GooodList;
