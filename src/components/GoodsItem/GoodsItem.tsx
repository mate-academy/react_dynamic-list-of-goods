import React from 'react';
import './GoodsItem.scss';

type Props = {
  good: Good;
};

export const GoodsItem: React.FC<Props> = ({ good }) => (
  <span style={{ color: `${good.color}` }}>{good.name}</span>
);
