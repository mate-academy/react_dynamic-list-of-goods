/// <reference types="react-scripts" />

interface Good {
  localeCompare(goodSecond: Good): number;
  id: number;
  name: string;
  color: string;
}
