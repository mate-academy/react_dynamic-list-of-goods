import React from 'react';
import PropTypes from 'prop-types';

export function Tab(props) {
  const { data } = props;

  return (
    <div className="tab">
      <ul>
        {
          data.map(item => (
            <li
              key={item.id}
              style={{ color: item.color }}
            >
              {item.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Tab.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
