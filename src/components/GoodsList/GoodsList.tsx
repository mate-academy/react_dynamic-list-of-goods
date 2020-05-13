import React from 'react';
import { IGood } from '../../models/IGood'

type Props = {
  goods: IGood[];
}

const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map((good: IGood) => (
        <li key={good.id} style = {{color:`${good.color}`}}>
          {good.name}
        </li>
      ))}
    </ul>
  )
};

export default GoodList;
