import React from 'react';
import PropTypes from 'prop-types'; 
import './GoodList.scss';

export class GoodList extends React.Component {
  state = {
    list: [],
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      this.setState({
        list: this.props.goods,
      });
    }
  }

  render() {
    const { list } = this.state;

    return (
      <>
        {list && (
          <>
            <ul className="list">
              {list.map(elem => (
                <li key={elem.id} className={elem.color}>
                  {elem.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

GoodList.propTypes = {
  show: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
