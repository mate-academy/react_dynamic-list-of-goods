import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

export default class List extends PureComponent {
  render() {
    return (
      <ListGroup>
        {this.props.goods.map(({ id, name, color }) => (
          <ListGroup.Item key={id} style={{ color }}>{name}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

List.propTypes = {
  goods: PropTypes.func.isRequired,
};
