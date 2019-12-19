import PropTypes from 'prop-types';
import React from 'react';
import Good from './Good';

const GoodsList = (props) => {
  const { errorLoadedGoods, goods } = props;

  if (errorLoadedGoods === true) {
    return (
      <p className="error">
          Error. Data is not loaded
      </p>
    );
  }

  return (
    <section className="middle">
      <ul>
        {
          goods.map(good => (
            <Good good={good} />
          ))
        }
      </ul>
    </section>
  );
};

GoodsList.propTypes = {
  errorLoadedGoods: PropTypes.bool.isRequired,
  goods: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default GoodsList;
