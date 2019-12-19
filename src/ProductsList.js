import React from 'react';
import PropTypes from 'prop-types';
import AdditionalInfoList from './AdditionalInfoList';

function ProductsList({ productsList }) {
  const lists = productsList.map(list => (
    <div key={list.id} className="row">
      <div className="col s12 m8">
        <div className="card">
          <div className="card-image">
            <img src={`${list.img}`} alt="im" />
          </div>
          <div className="card-content">
            <a href="#!" className="collection-item active">{list.type}</a>

            <AdditionalInfoList url={list.url} id={list.id} />

          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="wrap-con">
      {lists}
    </div>

  );
}

export default ProductsList;

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
