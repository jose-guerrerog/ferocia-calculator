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
} from "@mui/material";

import { calculateFinalBalance } from "../lib/calculator";
import { Frequency } from "../types";
import { INTEREST_FREQUENCIES } from "../constants";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [frequency, setFrequency] = useState(Frequency.MATURITY)

  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || !rate || !term) {
      return;
    }
    const final = calculateFinalBalance(
      amount,
      rate,
      term,
      frequency
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
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            fullWidth
          />
          <TextField
            label="Interest Rate (%)"
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            fullWidth
          />
          <TextField
            label="Term (years)"
            type="number"
            value={term}
            onChange={(e) => setTerm(parseFloat(e.target.value))}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="frequency-label">Frequency</InputLabel>
            <Select
              labelId="frequency-label"
              value={frequency}
              label="Interest Paid"
              onChange={() => {}}
            >
              {INTEREST_FREQUENCIES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">
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
