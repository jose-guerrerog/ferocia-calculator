import { Frequency } from './finance';

export const TERM_DEPOSIT_INPUT = {
  AMOUNT: 'amount',
  RATE: 'rate',
  TERM: 'term',
} as const;

export type TermDepositInput = typeof TERM_DEPOSIT_INPUT[keyof typeof TERM_DEPOSIT_INPUT];

export type TermDepositForm = Record<TermDepositInput, number | ''> & {
  frequency: Frequency;
};
