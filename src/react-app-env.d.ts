/// <reference types="react-scripts" />

type Props = {
  goods: Good[],
};

interface Good {
  id: number;
  name: string;
  color: string;
}
