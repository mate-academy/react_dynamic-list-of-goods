import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <Card style={{ width: '100%' }}>
    <ListGroup as="ol" numbered>
      {goods.map((good) => (
        <ListGroup.Item
          as="li"
          key={good.id}
          data-cy="good"
          style={{ color: good.color }}
        >
          {good.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);
