export interface Good {
  localCompare(b: Good): number;
  id: number;
  name: string;
  color: string;
}
