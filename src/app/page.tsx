"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Box,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

import { calculateFinalBalance } from "../lib/calculator";
import { Frequency, TermDepositForm, TermDepositInput } from "../types";
import { INITIAL_VALUES, INTEREST_FREQUENCIES } from "../constants";

export default function Home() {
  const [form, setForm] = useState<TermDepositForm>({
    amount: INITIAL_VALUES.capital,
    rate: INITIAL_VALUES.rate,
    term: INITIAL_VALUES.term,
    frequency: Frequency.MATURITY,
  });

  const [result, setResult] = useState<number | null>(null);

  const isBtnDisabled = !form.amount || !form.rate || !form.term;

  const handleNumericChange = (key: TermDepositInput) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setForm((prev) => ({ ...prev, [key]: value === "" ? "" : parseFloat(value)  }));
    };
  
  const handleFrequencyChange = (e: SelectChangeEvent) => {
    setForm((prev) => ({ ...prev, frequency: e.target.value as Frequency }));
  };

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.amount || !form.rate || !form.term) {
      return;
    }
    const final = calculateFinalBalance(
      form.amount,
      form.rate,
      form.term,
      form.frequency
    );
    setResult(final);
  };

  return (
    <Box component="div" maxWidth={600} margin="auto">
      <Box component="form" onSubmit={handleCalculate}>
        <Typography variant="h4" gutterBottom>
          Ferocia Calculator
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Start Amount ($)"
            type="number"
            value={form.amount}
            onChange={handleNumericChange("amount")}
            fullWidth
          />
          <TextField
            label="Interest Rate (%)"
            type="number"
            value={form.rate}
            onChange={handleNumericChange("rate")}
            fullWidth
          />
          <TextField
            label="Term (years)"
            type="number"
            value={form.term}
            onChange={handleNumericChange("term")}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="frequency-label">Frequency</InputLabel>
            <Select
              labelId="frequency-label"
              value={form.frequency}
              label="Frequency"
              onChange={handleFrequencyChange} 
            >
              {INTEREST_FREQUENCIES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" disabled={isBtnDisabled}>
            Calculate
          </Button>
        </Box>
      </Box>
      {result && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Final Balance: ${result}
        </Typography>
      )}
    </Box>
  );
}
