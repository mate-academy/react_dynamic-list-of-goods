import React from 'react';
import style from './GoodList.module.css';
import { Good } from '../../react-app-env';

interface Props {
  goods: Good[] | [],
}

const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className={style.list}>
    {goods.map(good => (
      <li
        key={good.id}
        className={style.listItem}
        style={{
          color: good.color,
        }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodList;
