export interface Good {
  localeCompare(nextGood: Good): number;
  id: number;
  name: string;
  color: string;
}
