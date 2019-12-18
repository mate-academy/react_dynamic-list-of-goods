import PropTypes from 'prop-types';
import React from 'react';

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
            <li key={good.id}>{good.name}</li>
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
