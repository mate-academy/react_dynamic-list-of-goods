import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';
import { FILTER_TYPES } from './const';

const GoodsList = ({ goods, setFilter }) => (
  <>
    <section>
      {Object.keys(FILTER_TYPES).map(
        filter => (
          <button
            type="button"
            onClick={() => setFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        )
      )}
    </section>
    <ul>
      {goods.map(item => <Good key={item.id} good={item} />)}
    </ul>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default GoodsList;
