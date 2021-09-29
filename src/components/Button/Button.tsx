import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  name: string;
  handleChange: () => void;
}

export const Button: React.FC<Props> = (props) => {
  const { name, handleChange } = props;

  return (
    <button
      type="button"
      className="btn btn-success mr-2"
      onClick={handleChange}
    >
      {name}
    </button>
  );
};
