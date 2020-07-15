export interface Good {
  id: number;
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pattern {
  (good: Good): boolean;
}
