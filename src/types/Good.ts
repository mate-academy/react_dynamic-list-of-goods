export interface Good {
  localeCompare(good2: Good): unknown;
  id: number;
  name: string;
  color: string;
}
