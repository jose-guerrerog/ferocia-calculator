import { Frequency } from '@/types';

export const INITIAL_VALUES = {
  capital: 10000,
  rate: 1.1,
  term: 3,
  frequency: Frequency.MATURITY
}

export const COMPOUND_PERIODS = {
  [Frequency.MONTHLY] : 12,
  [Frequency.QUARTERLY]: 4,
  [Frequency.ANNUALLY]: 1
};

export const INTEREST_FREQUENCIES: { label: string; value: Frequency }[] = [
  { label: 'Monthly', value: Frequency.MONTHLY },
  { label: 'Quarterly', value: Frequency.QUARTERLY },
  { label: 'Annually', value: Frequency.ANNUALLY },
  { label: 'At Maturity', value: Frequency.MATURITY },
];