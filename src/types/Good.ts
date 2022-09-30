export interface Good {
  tolocalecompare(b: Good): number;
  id: number;
  name: string;
  color: string;
}
