export const ButtonChoice = {
  ALL: 'all',
  FIVE: 'five',
  RED: 'red',
} as const;

export type ButtonChoiceValue =
  (typeof ButtonChoice)[keyof typeof ButtonChoice];
