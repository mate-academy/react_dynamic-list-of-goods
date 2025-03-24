export interface Good {
  toLocalCompare(good2: Good): unknown;
  id: number;
  name: string;
  color: string;
}
