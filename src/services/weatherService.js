import axios from 'axios';

const API_KEY = '91e199562ea34dceba2134716241307';

export const fetchWeather = async (location) => {
  const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
    params: {
      key: API_KEY,
      q: location,
    },
  });
  return response.data;
};
