import React from 'react';

interface Props {
  data: Good[] | undefined
}

const GoodsList:React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data?.map(({ name, color, id }) => (
        <h2 style={{ color }} key={id}>{name}</h2>
      ))}
    </div>
  );
};

export default GoodsList;
