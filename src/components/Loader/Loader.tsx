import { FC } from 'react';
import './Loader.scss';

export const Loader: FC = () => {
  return (
    <>
      <div className="loader">
        <div className="loader__circle" />
        <div className="loader__circle" />
        <div className="loader__circle" />
        <div className="loader__shadow" />
        <div className="loader__shadow" />
        <div className="loader__shadow" />
      </div>

      <hr className="loader__line" />
    </>
  );
};
