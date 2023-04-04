import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
  text: string;
  className: string;
  'data-cy': string;
  onDataLoad: (stopButtonLoading: () => void) => void;
};

export const LoadingButton: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    text,
    className,
    'data-cy': dataCy,
    onDataLoad,
  } = props;

  const handleDataLoad = async () => {
    setIsLoading(true);
    onDataLoad(() => setIsLoading(false));
  };

  return (
    <button
      type="button"
      className={classNames(
        className,
        {
          'is-loading': isLoading,
        },
      )}
      data-cy={dataCy}
      onClick={handleDataLoad}
    >
      {text}
    </button>
  );
};
