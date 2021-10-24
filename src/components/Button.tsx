import React from 'react';

interface Props {
  callback:() => void,
  buttonText:string,
}
export const Button: React.FC<Props> = ({ callback, buttonText }) => (
  <button type="button" onClick={callback}>
    {buttonText}
  </button>
);
