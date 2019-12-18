import React from 'react';
import PropTypes from 'prop-types';

const GoodList = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map(item => <li style={{ color: item.color }}>{item.name}</li>)}
    </ul>
  );
};

GoodList.propTypes = { goods: PropTypes.arrayOf(PropTypes.object).isRequired };

export default GoodList;
