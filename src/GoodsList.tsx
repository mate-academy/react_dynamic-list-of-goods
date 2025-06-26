import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

/**
 * GoodsList component displays a list of goods.
 * Each item's text color is dynamically set based on its 'color' property.
 */
export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul
    className="
      list-disc list-inside bg-white shadow-lg rounded-lg
      p-6 w-full max-w-2xl
    "
  >
    {/* Map through the goods array and render each good as a list item */}
    {goods.map(good => (
      <li
        key={good.id} // Unique key for each list item, essential for React lists
        data-cy="good" // Data attribute for Cypress testing
        // Apply inline style to set the text color based on the good's color property
        className="
          mb-2 p-2 border-b border-gray-200 last:border-b-0
          text-lg font-medium capitalize
        "
        style={{ color: good.color.toLowerCase() }} // Ensure color is lowercase for CSS compatibility
      >
        {good.name} {/* Display the name of the good */}
      </li>
    ))}
  </ul>
);
