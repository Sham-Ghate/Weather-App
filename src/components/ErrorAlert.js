import React, { useContext } from "react";
import { Alert } from "@mui/material";
import { WeatherContext } from "../context/WeatherContext";

const ErrorAlert = () => {
  const { error } = useContext(WeatherContext);

  if (!error) {
    return null;
  }

  return (
    <Alert severity="error" sx={{ mt: 4 }}>
      {error}
    </Alert>
  );
};

export default ErrorAlert;
