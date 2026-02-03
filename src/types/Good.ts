export interface Good {
  id: number;
  name: string;
  color: string;
}

export type Props = {
  goods: Good[];
};
