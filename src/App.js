import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import CustomAppBar from "./components/AppBar";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ErrorAlert from "./components/ErrorAlert";
import { Container } from "@mui/material";
import "./App.css";

const App = () => (
  <WeatherProvider>
    <div className="App">
      <CustomAppBar />
      <Container className="Container">
        <SearchBox />
        <ErrorAlert />
        <WeatherCard />
      </Container>
    </div>
  </WeatherProvider>
);

export default App;
