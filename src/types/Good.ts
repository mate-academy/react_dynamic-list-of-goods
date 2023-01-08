export interface Good {
  localeCompare(b: Good): unknown;
  id: number;
  name: string;
  color: string;
}
