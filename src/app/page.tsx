"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";

export default function Home() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [term, setTerm] = useState(0)


  return (
    <Box component="div" maxWidth={600} margin="auto">
      <Box component="form">
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

          <Button type="submit" variant="contained">
            Calculate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
