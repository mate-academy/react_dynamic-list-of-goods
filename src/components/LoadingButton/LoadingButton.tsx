import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
  text: string;
  'data-cy': string;
  onDataLoad: (stopButtonLoading: () => void, goodsGroupText: string) => void;
};

export const LoadingButton: React.FC<Props> = (props) => {
  const {
    text,
    'data-cy': dataCy,
    onDataLoad,
  } = props;

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleDataLoad = async () => {
    setIsButtonLoading(true);
    onDataLoad(() => setIsButtonLoading(false), text);
  };

  return (
    <button
      type="button"
      className={classNames(
        'button',
        'has-text-weight-medium',
        'has-text-black',
        {
          'is-loading': isButtonLoading,
        },
      )}
      data-cy={dataCy}
      onClick={handleDataLoad}
    >
      {`Load ${text}`}
    </button>
  );
};
