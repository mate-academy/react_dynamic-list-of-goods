import React from 'react';
import classNames from 'classnames';

type Props = {
  dataCy: string,
  onClick: () => Promise<void>,
  clickedButton: string,
  children: React.ReactNode,
};

export const Button: React.FC<Props> = ({
  dataCy,
  onClick,
  clickedButton,
  children,
}) => {
  const isButtonActive = clickedButton === dataCy;

  return (
    <button
      type="button"
      data-cy={dataCy}
      onClick={onClick}
      className={classNames(
        'button is-light',
        {
          'is-warning': isButtonActive,
        },
      )}
    >
      {children}
    </button>
  );
};
