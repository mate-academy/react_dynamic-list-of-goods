import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

import './style.css';

const GoodsList = ({ goods }) => (
  <div className="ui list">
    {
      goods.map(item => (
        <Good key={`${item}${Math.random()}`} className="item" good={item} />
      ))
    }
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoodsList;
