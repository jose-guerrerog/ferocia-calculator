import { Frequency } from './finance';

export interface TermDepositForm {
  amount: number | "";
  rate: number | "";
  term: number | "";
  frequency: Frequency;
}
