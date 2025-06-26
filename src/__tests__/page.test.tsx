import { render, screen, fireEvent, cleanup  } from '@testing-library/react';
import Page from '@/app/page';

describe('Ferocia Calculator', () => {

  beforeEach(() => {
    cleanup(); 
    render(<Page />);
  });

  afterEach(() => {
    cleanup(); 
  });

  const validInputs = {
    startAmount: 10000,
    interestRate: 2.1,
    term: 4
  };

  const fillInputs = ({ startAmount, interestRate, term } : {
    startAmount: number | '', interestRate: number | '', term: number | ''
  }) => {
    fireEvent.change(screen.getByLabelText(/Start Amount/i), {
      target: { value: startAmount },
    });
    fireEvent.change(screen.getByLabelText(/Interest Rate/i), {
      target: { value: interestRate },
    });
    fireEvent.change(screen.getByLabelText(/Term/i), {
      target: { value: term },
    });
  };


  it('calculates final balance when valid inputs are entered', () => {
    fillInputs(validInputs);
    fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

    expect(screen.getByText(/Final Balance:/i)).toBeInTheDocument();
  });
});