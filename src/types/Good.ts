export interface Good {
  localeCompare(good2: Good): number;
  id: number;
  name: string;
  color: string;
}
