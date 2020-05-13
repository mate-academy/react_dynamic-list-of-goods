import React from 'react';

interface Props {
  buttonsInit: TypeButton[];
}

export const Button: React.FC<Props> = ({ buttonsInit }) => (
  <ul>
    {
      buttonsInit.map(({ id, title, event }) => (
        <button
          type="button"
          key={id}
          className="button"
          onClick={() => event()}
        >
          {title}
        </button>
      ))
    }
  </ul>
);
