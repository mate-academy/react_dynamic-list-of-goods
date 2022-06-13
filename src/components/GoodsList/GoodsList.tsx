import React from "react";

interface Props {
  goods: Good[]
}

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {

  return (
    <ul>
        {
          goods.length ?
            goods.map(good => (
              <li
                key={good.id}
                style={{color: good.color}}
              >
                {good.name}
              </li>
            )) :  <li key='load'>Loading...</li>
        }
    </ul>
  );
});
