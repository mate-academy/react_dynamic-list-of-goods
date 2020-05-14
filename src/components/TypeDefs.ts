export interface Good {
  id: number;
  name: string;
  color: string;
}

export interface Button {
  id: number;
  title: string;
  event: () => void;
}
