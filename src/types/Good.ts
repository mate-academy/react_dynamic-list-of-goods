/**
 * Defines the structure for a 'Good' object.
 * This interface ensures type safety for goods data throughout the application.
 */
export interface Good {
  id: number;    // Unique identifier for the good
  name: string;  // Name of the good
  color: string; // Color of the good (e.g., 'red', 'blue', 'green')
}
