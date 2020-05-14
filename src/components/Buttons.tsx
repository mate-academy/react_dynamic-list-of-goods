import React from 'react';

import { Button } from './TypeDefs';

interface Props {
  buttonsInit: Button[];
}

export const Buttons: React.FC<Props> = ({ buttonsInit }) => {
  return (
    <div>
      {buttonsInit.map(({ id, title, event }) => (
        <button
          type="button"
          key={id}
          className="good__button"
          onClick={() => event()}
        >
          {title}
        </button>
      ))}
    </div>
  );
};
