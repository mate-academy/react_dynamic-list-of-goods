import React, { FC } from 'react';
import { GoodsItemProps } from '../interfaces/GoodsItemProps';

const getDate = (date: string): string => {
  const pattern = /\d+-\d{2,}-\d{2,}/;
  const match: string[] = date.match(pattern) || [''];

  return match[0];
};

export const GoodsItem: FC<GoodsItemProps> = ({ name, color, createdAt }) => {
  return (
    <li>
      <span style={{ color }}>{name}</span>
      <small className="right">{getDate(createdAt || '')}</small>
    </li>
  );
};
