import React, { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeather } from "../services/weatherService";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const { setWeather, setError, setLoading } = useContext(WeatherContext);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(location);
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <TextField
        label="Enter location"
        variant="outlined"
        value={location}
        onChange={handleChange}
        sx={{ width: "100%", maxWidth: 400 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: "100%", maxWidth: 200 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
