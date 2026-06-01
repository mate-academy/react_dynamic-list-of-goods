import React from 'react';
import { Link } from 'react-router-dom';

export const Tabs: React.FC = () => {
  return (
    <div>
      <h2>Tabs</h2>
      <ul>
        <li>
          <Link to="/tabs/tab-1">Tab 1</Link>
        </li>
        <li>
          <Link to="/tabs/tab-2">Tab 2</Link>
        </li>
        <li>
          <Link to="/tabs/tab-3">Tab 3</Link>
        </li>
      </ul>
    </div>
  );
};
