import { COMPOUND_PERIODS } from "@/constants";
import { Frequency } from "@/types";

export function calculateFinalBalance(
  capital: number,
  interestRate: number,
  termYears: number,
  frequency: Frequency
): number {
  const rate = interestRate / 100;
  
  if (frequency === Frequency.MATURITY) {
    const finalAmount = capital * (1 + rate * termYears);
    return Math.round(finalAmount);
  }
  
  const periodFrequency = COMPOUND_PERIODS[frequency];
  const finalAmount = capital * Math.pow(1 + rate / periodFrequency, periodFrequency * termYears);
  
  return Math.round(finalAmount);
}