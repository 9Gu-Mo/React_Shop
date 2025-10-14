"use client";

import styled from "@emotion/styled";
import { Button, createTheme, Paper, TextField, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// form container
const FormContainer = styled(Paper)(({}) => ({
  maxWidth: 600,
  margin: "60px auto",
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  backgroundColor: theme.palette.background.paper,
}));

// title
const Title = styled(Typography)(({}) => ({
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
}));

// input
const CustomTextField = styled(TextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fafafa",
    transition: "box-shadow 0.2s, border-color 0.2s",
  },
}));

// button
const SubmitButton = styled(Button)(({}) => ({
  height: 48,
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  marginTop: theme.spacing(2),
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 10px rgba(25, 118, 210, 0.2)",
  },
}));

export default function MuiTest() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출된 데이터: ", formData);
  };

  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}
