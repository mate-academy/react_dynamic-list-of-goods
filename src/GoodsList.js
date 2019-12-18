import React from 'react';
import PropTypes from 'prop-types';

const GoodList = (props) => {
  const { good } = props;

  return (
    <ul>
      {good.map(item => <li style={{ color: item.color }}>{item.name}</li>)}
    </ul>
  );
};

GoodList.propTypes = { good: PropTypes.arrayOf(PropTypes.object).isRequired };

export default GoodList;
