import React from 'react';
import { isEqual } from 'lodash';
import { Good } from './types/Good';
import { GoodItem } from './GoodItem';

type Props = {
  goods: Good[]
};

const RegularGoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <GoodItem good={good} key={good.id} />
    ))}
  </ul>
);

const arePropsEqual = (prevProps: Props, newProps: Props) => {
  return isEqual(prevProps.goods, newProps.goods);
};

export const GoodsList = React.memo(RegularGoodsList, arePropsEqual);
