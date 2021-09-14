import React from 'react';
import classNames from 'classnames';

type Props = {
  buttonType: string;
  callback: () => void;
  color: string;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={classNames('button', 'is-light', 'mx-2', props.color)}
      type="button"
      onClick={props.callback}
    >
      {'Load '}
      {props.buttonType}
      {' goods'}
    </button>
  );
};
