import React from 'react';

const Goodlist: React.FC<{ goods: Good[] }> = ({ goods }) => (
  <>
    {goods && goods.length > 0 ? (
      <ul className="app__list">
        {goods.map((good) => (
          <li
            key={good.name + good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    ) : (
      <p>No goods</p>
    )}
  </>
);

export default Goodlist;
