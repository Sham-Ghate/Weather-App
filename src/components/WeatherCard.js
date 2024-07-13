import React, { useContext } from "react";
import {
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { WeatherContext } from "../context/WeatherContext";

const getBackgroundColor = (condition) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return "linear-gradient(135deg, #ffeb3b, #ff9800)"; // Sunny
    case "rain":
      return "linear-gradient(135deg, #b3cde0, #003366)"; // Rain
    case "snow":
      return "linear-gradient(135deg, #e0f7fa, #b2ebf2)"; // Snow
    case "storm":
      return "linear-gradient(135deg, #424242, #616161)"; // Storm
    case "cloudy":
      return "linear-gradient(135deg, #cfd8dc, #90a4ae)"; // Cloudy
    default:
      return "linear-gradient(135deg, #e3f2fd 30%, #bbdefb 100%)"; // Default
  }
};

const WeatherCard = () => {
  const { weather, loading } = useContext(WeatherContext);

  if (loading) {
    return <CircularProgress sx={{ mt: 4 }} />;
  }

  if (!weather) {
    return null;
  }

  const {
    location: { name, country } = {},
    current: {
      temp_c,
      temp_f,
      condition: { text, icon } = {},
      wind_kph,
      humidity,
      cloud,
      last_updated,
    } = {},
  } = weather;

  // Get the background based on the weather condition
  const background = getBackgroundColor(text);

  return (
    <Paper
      sx={{
        maxWidth: 600,
        margin: "auto",
        marginTop: 4,
        padding: 2,
        boxShadow: 3,
        background: background, // Dynamic background based on weather condition
        borderRadius: 2,
        textAlign: "center",
        color: "#fff", // Text color for better contrast
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
          {name}, {country}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            {icon && (
              <Avatar src={icon} alt={text} sx={{ width: 100, height: 100 }} />
            )}
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              {text}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {temp_c}°C / {temp_f}°F
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Wind Speed: {wind_kph} kph
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity: {humidity}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cloud Coverage: {cloud}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last Updated: {last_updated}
          </Typography>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default WeatherCard;
