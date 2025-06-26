import { Frequency } from '@/types';

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