export interface Good {
  localeCompare(prevGood: Good): number;
  id: number;
  name: string;
  color: string;
}
