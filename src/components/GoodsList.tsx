import React, { CSSProperties } from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props: Props) => {
  const { goods } = props;

  return (
    <>
      <ul className="list-unstyled">
        {goods.map((good: Good & CSSProperties) => (
          <li key={good.id} style={{ color: good.color && good.color }}>{good.name}</li>))}
      </ul>
    </>
  );
};
