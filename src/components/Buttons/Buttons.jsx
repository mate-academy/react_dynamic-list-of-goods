import React, { PureComponent } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Buttons extends PureComponent {
  render() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button
          name="allGoods"
          onClick={() => this.props.getGoods(this.props.getAll)}
          variant="success"
        >
          Load All Goods
        </Button>
        <Button
          name="firstGoods"
          onClick={() => this.props.getGoods(this.props.get5First)}
          variant="secondary"
        >
          Load First 5 Goods
        </Button>
        <Button
          name="redGoods"
          onClick={() => this.props.getGoods(this.props.getRedGoods)}
          variant="danger"
        >
          Load Red Goods
        </Button>
      </ButtonGroup>
    );
  }
}

Buttons.propTypes = {
  getGoods: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired,
  get5First: PropTypes.func.isRequired,
  getRedGoods: PropTypes.func.isRequired,
};
