import React, { FC } from 'react';

interface GoodsItemProps {
  name: string;
  color: string;
  createdAt?: string;
}

const getDate = (date: string): string => {
  const pattern = /\d+-\d{2,}-\d{2,}/;
  const match: string[] = date.match(pattern) || [''];

  return match[0];
};

export const GoodsItem: FC<GoodsItemProps> = ({ name, color, createdAt }) => (
  <li>
    <span style={{ color }}>{name}</span>
    <small className="right">{getDate(createdAt || '')}</small>
  </li>
);
