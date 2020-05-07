import React from 'react';
import { Button } from './Interface';

interface Props {
  buttonsDetails: Button[];
}
const Buttons: React.FC<Props> = ({ buttonsDetails }) => {
  return (
    <div className="container">
      {buttonsDetails.map(({ title, clickEvent }) => (
        <button
          type="button"
          className="button"
          onClick={() => clickEvent()}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
