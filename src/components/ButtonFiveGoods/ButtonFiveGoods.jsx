import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { makeStyles } from '@material-ui/core/styles';
import { get5First } from '../../api/goods';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #1976d2, #4791db)',
    color: 'white',
    border: 1,
    marginRight: '30px',
  },
});

export const ButtonFiveGoods = ({ handlerForGoods }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={() => {
        handlerForGoods(get5First);
      }}
      className={classes.root}
      startIcon={<DoneAllIcon />}
      variant="contained"
    >
      5 first goods
    </Button>
  );
};

ButtonFiveGoods.propTypes = {
  handlerForGoods: PropTypes.func.isRequired,
};
