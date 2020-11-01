import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Button = ({ startLoad, isLoadingGoods, buttonText }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoadingGoods) {
      return;
    }

    startLoad();
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoadingGoods) {
      setIsLoading(false);
    }
  }, [isLoadingGoods]);

  return (
    <button
      className="btn btn-primary mr-2"
      type="button"
      onClick={handleClick}
    >
      {
        isLoading ? (
          <span>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </span>
        ) : (
          <span>{buttonText}</span>
        )
      }
    </button>
  );
};

Button.propTypes = {
  startLoad: PropTypes.func.isRequired,
  isLoadingGoods: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
};
