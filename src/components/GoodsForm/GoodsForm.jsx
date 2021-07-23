import React from 'react';
import PropTypes from 'prop-types';
import { FormButton } from '../FormButton';

export const GoodsForm = ({
  getAll,
  get5First,
  getRedGoods,
  classesWhenLoaded,
  classesWhenLoading,
}) => (
  <form className="field is-grouped is-grouped-centered">
    <FormButton
      text="Load all goods"
      action={getAll}
      classesWhenLoaded={classesWhenLoaded}
      classesWhenLoading={classesWhenLoading}
    />
    <FormButton
      text="Load 5 first goods"
      action={get5First}
      classesWhenLoaded={classesWhenLoaded}
      classesWhenLoading={classesWhenLoading}
    />
    <FormButton
      text="Load red goods"
      action={getRedGoods}
      classesWhenLoaded={classesWhenLoaded}
      classesWhenLoading={classesWhenLoading}
    />
  </form>
);

GoodsForm.propTypes = {
  getAll: PropTypes.func.isRequired,
  get5First: PropTypes.func.isRequired,
  getRedGoods: PropTypes.func.isRequired,
  classesWhenLoaded: PropTypes.string.isRequired,
  classesWhenLoading: PropTypes.string.isRequired,
};
