import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../Card';

import './GoodsList.scss';

export const GoodsList = ({ goods, images }) => (
  <ul className="goods-list">
    {
        goods.map((good) => {
          const goodImage = images.find(obj => obj[good.name]);

          return (
            <li
              className="wrapper"
              key={good.id}
            >
              <Card
                {...good}
                goodImage={goodImage[good.name]}
              />
            </li>
          );
        })
      }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
