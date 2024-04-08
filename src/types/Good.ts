export interface Good {
  localeCompare(b: Good): number;
  id: number;
  name: string;
  color: string;
}
