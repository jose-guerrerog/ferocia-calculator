import { Frequency } from '@/types';

export const INTEREST_FREQUENCIES: { label: string; value: Frequency }[] = [
  { label: 'Monthly', value: Frequency.MONTHLY },
  { label: 'Quarterly', value: Frequency.QUARTERLY },
  { label: 'Annually', value: Frequency.ANNUALLY },
  { label: 'At Maturity', value: Frequency.MATURITY },
];