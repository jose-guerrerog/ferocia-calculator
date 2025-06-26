import { calculateFinalBalance } from '@/lib/calculator';
import { Frequency } from '@/types';

describe('calculateFinalBalance', () => {
  it('calculates simple interest when compounding at maturity: $10,000 at 5.1% for 2 years', () => {
    const result = calculateFinalBalance(10000, 5.1, 2, Frequency.MATURITY);
    expect(result).toBe(11020);
  });

  it('calculates compound interest with annual compounding: $15,000 at 3.6% for 1 year', () => {
    const result = calculateFinalBalance(15000, 3.6, 1, Frequency.ANNUALLY);
    expect(result).toBe(15540);
  });

  it('calculates compound interest with monthly compounding: $20,000 at 2.3% for 3 years', () => {
    const result = calculateFinalBalance(20000, 2.3, 3, Frequency.MONTHLY);
    expect(result).toBe(21427);
  });

  it('calculates compound interest with quarterly compounding: $5,000 at 1.9% for 4 years', () => {
    const result = calculateFinalBalance(5000, 1.9, 4, Frequency.QUARTERLY);
    expect(result).toBe(5394);
  });
});
