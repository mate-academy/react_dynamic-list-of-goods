/// <reference types="react-scripts" />

interface Good {
  id: number;
  name: string;
  color: string;
}

type LoadFunction = () => Promise<Good[]>;
