import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ListGroup>
      {goods.map(good => {
        const { id, color, name } = good;

        return (
          <ListGroup.Item
            key={id}
            data-cy="good"
            style={{
              color,
            }}
          >
            {name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  ),
);
