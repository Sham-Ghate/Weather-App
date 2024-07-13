# Weather App

A React application that displays weather information based on user input. This app provides current weather details including temperature, weather conditions, wind speed, humidity, and more. It dynamically changes the background based on weather conditions.

## Features

- **Weather Information**: Displays temperature in Celsius and Fahrenheit, weather conditions, wind speed, humidity, and cloud coverage.
- **Dynamic Background**: Changes background based on weather conditions such as sunny, rainy, snowy, etc.
- **Search Functionality**: Allows users to search for weather data by location.
- **Error Handling**: Displays error messages if API requests fail.

## Technologies Used

- React
- Material-UI
- WeatherAPI

## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd weather-app
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root directory**

    ```bash
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

5. **Start the development server**

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Search for Weather Data**

    Enter a location in the search box and click "Search" to retrieve weather data.

2. **View Weather Details**

    The weather details will be displayed in a card format with a dynamically changing background based on the weather condition.

## Components

- **AppBar**: Displays the application name.
- **SearchBox**: Allows users to input and submit a location.
- **WeatherCard**: Displays weather details.

## CSS Styling

- **App Background**: Dynamic background based on weather condition.
- **WeatherCard**: Styled with Material-UI components and CSS to create a visually appealing card.

## Error Handling

The application handles errors by displaying messages if the API request fails or returns an error.

## Contributing

1. **Fork the repository**
2. 
3. **Create a new branch**

4. **Make your changes**
5. 
6. **Commit your changes**

    ```bash
    git commit -am 'Add new feature'
    ```

7. **Push to the branch**

    ```bash
    git push origin feature/your-feature
    ```

8. **Create a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact sdghate123@gmail.com.

