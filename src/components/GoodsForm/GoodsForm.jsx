import React from 'react';
import PropTypes from 'prop-types';
import { FormButton } from '../FormButton';

export const GoodsForm = ({ getAll, get5First, getRedGoods }) => (
  <form className="field is-grouped is-grouped-centered">
    <FormButton
      text="Load all goods"
      action={getAll}
    />
    <FormButton
      text="Load 5 first goods"
      action={get5First}
    />
    <FormButton
      text="Load red goods"
      action={getRedGoods}
    />
  </form>
);

GoodsForm.propTypes = {
  getAll: PropTypes.func.isRequired,
  get5First: PropTypes.func.isRequired,
  getRedGoods: PropTypes.func.isRequired,
};
