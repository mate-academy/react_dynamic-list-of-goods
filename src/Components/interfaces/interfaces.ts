export interface Good {
  id: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface Pattern {
  (good: Good): boolean;
}
