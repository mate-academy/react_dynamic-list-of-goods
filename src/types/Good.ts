export interface Good {
  localeCompare(goodB: Good): number;
  id: number;
  name: string;
  color: string;
}
