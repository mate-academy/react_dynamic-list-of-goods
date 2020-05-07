export interface Good {
  id: number;
  name: string;
  color: string;
}

export interface Button {
  title: string;
  clickEvent: () => void;
}
