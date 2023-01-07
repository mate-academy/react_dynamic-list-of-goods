export interface Good {
  localeCompare(g2: Good): number;
  id: number;
  name: string;
  color: string;
}
