import React from 'react';
import { Loader, List } from 'semantic-ui-react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  loading: boolean;
};

export const GoodsList: React.FC<Props> = ({ goods, loading }) => (
  <ul>
    {loading ? (
      <Loader active inline size="medium">
        Loading
      </Loader>
    ) : (
      goods.map((good) => (
        <List>
          <List.Item ordered>
            <li
              key={good.id}
              data-cy="good"
              style={{ color: `${good.color}`, fontSize: '20px' }}
            >
              {good.name}
            </li>
          </List.Item>
        </List>
      ))
    )}
  </ul>
);
