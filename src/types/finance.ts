export const Frequency = {
  MONTHLY: 'monthly',
  QUARTERLY: 'quarterly',
  ANNUALLY: 'annually',
  MATURITY: 'maturity',
} as const;

export type Frequency = typeof Frequency[keyof typeof Frequency];