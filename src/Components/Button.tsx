import React from 'react';
import classNames from 'classnames';

type Props = {
  buttonType: string;
  callback: () => void;
  color: string;
};

export const Button: React.FC<Props> = (props) => {
  const { callback, buttonType, color } = props;
  return (
    <button
      className={classNames('button', 'is-light', 'mx-2', color)}
      type="button"
      onClick={callback}
    >
      {'Load '}
      {buttonType}
      {' goods'}
    </button>
  );
};
