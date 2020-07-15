export interface Good {
  id: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilterPattern {
  (good: Good): boolean;
}

export interface SortPattern {
  (goodA: Good, goodB: Good): number;
}
