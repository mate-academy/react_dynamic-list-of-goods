import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ListGroup>
    {goods.map(good => (
      <ListGroup.Item
        key={good.id}
        data-cy="good"
        style={{
          color: good.color,
        }}
      >
        {good.name}
      </ListGroup.Item>
    ))}
  </ListGroup>
);
