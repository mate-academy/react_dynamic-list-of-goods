import React, { PureComponent } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Buttons extends PureComponent {
  handleClickEvent = (event) => {
    this.props.getGoods(event.target.name);
  }

  render() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button
          name="allGoods"
          onClick={this.handleClickEvent}
          variant="success"
        >
          Load All Goods
        </Button>
        <Button
          name="firstGoods"
          onClick={this.handleClickEvent}
          variant="secondary"
        >
          Load First 5 Goods
        </Button>
        <Button
          name="redGoods"
          onClick={this.handleClickEvent}
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
};
