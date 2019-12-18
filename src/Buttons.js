import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ showAllGoods, showFirstFiveGoods, showOnlyRedGoods }) => (
  <>
    <button type="button" className="button" onClick={showAllGoods}>
      Show the whole list
    </button>
    <button type="button" className="button" onClick={showFirstFiveGoods}>
      Show first five goods
    </button>
    <button type="button" className="button" onClick={showOnlyRedGoods}>
      Show only red goods
    </button>
  </>
);

Buttons.propTypes = {
  showAllGoods: PropTypes.func.isRequired,
  showFirstFiveGoods: PropTypes.func.isRequired,
  showOnlyRedGoods: PropTypes.func.isRequired,
};

export default Buttons;
