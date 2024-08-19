# Simple Weather App

I’ve created a simple weather app using React that lets you search for the current weather by city name. The app fetches real-time data from the OpenWeatherMap API and displays it in a user-friendly format. You can see the current temperature, how it feels, a short description of the weather, and a corresponding weather icon. The app also handles errors like duplicate city searches or invalid city names, giving you a clear notification if something goes wrong.

## Features

- **Search by City**: Just enter the name of a city to get its current weather details.
- **Weather Details**: Displays the current temperature, feels-like temperature, weather description, and country code.
- **Live Data**: Fetches real-time weather data from the OpenWeatherMap API.
- **Weather Icons**: Shows an icon that matches the current weather condition.
- **Error Handling**: Alerts you if you try to search for the same city again or if the city name is invalid.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making API requests to fetch weather data.
- **React Toastify**: For displaying toast notifications.
- **OpenWeatherMap API**: For sourcing the weather data.