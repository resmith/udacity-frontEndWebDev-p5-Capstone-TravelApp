# Project Instructions

## Purpose

The purpose of this application is the capstone project for Udacity Front-End Web developer to demonstrate:

- webpack and it's plugins

  -- CSS

  -- service workers for offline access

  -- webpack dev server

- Testing / Jest
- Async calls to an API

## Installation

1. From your terminal, to install the code

```
git clone <thisRepo>
```

2. Provide your API key for

- Obtain an API key from meaning cloud
  [Meaning Cloud URL](https://www.meaningcloud.com/developer/sentiment-analysis)
- edit the .env file at the project root directory, with your API key in the format

```
API_GEONAME_KEY=<yourAPiKey - without quotes>
API_WEATHERBIT_KEY=<yourAPiKey - without quotes>
API_PIXABAY_KEY=<yourAPiKey - without quotes>
```

\*note:

- Country facts do not require a key
- For testing, these keys will need to be created for the shell the test is run

3. Start the server

```
cd <directoryClonedTo>
npm start
```

4. Start the client
   From another terminal session

```
cd <directoryClonedTo>
npm run build-dev
```

## Testing

To run the test

```
cd <directoryClonedTo>
API_GEONAME_KEY=<yourAPiKey - without quotes>
API_WEATHERBIT_KEY=<yourAPiKey - without quotes>
API_PIXABAY_KEY=<yourAPiKey - without quotes>
npm run test
```

## Base Requirements

### Screen Inputs

1. City user is traveling to
2. The date they are leaving

### Screen Returns

1. Weather Forecast

- If the trip is within a week - return the current weather forecast
- If the trip is further out - return a predicted forecast.

## API's Called

### Geonames

Input: City
Return: Coordinates (latitude, longitude, country,)

[Geonames API](http://www.geonames.org/export/web-services.html)

### WeatherBit

Input: Zip Code
Send: Weather Forecast

[WeatherBit API](https://www.weatherbit.io/api)
Input: Coordinate
Return: Weather Forecast

## Rest Pixabay

[Pixabay API](https://pixabay.com/api/docs/)
Input: Coordinate
Return: Images of the area

## Rest Countries

[Rest Countries](https://restcountries.eu/)
Input: Location
Return: Information about the country

## Additional Requirements

Add end date and display length of trip.
Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).

Integrate the REST Countries API to pull in data for the country being visited.
Incorporate icons into forecast.
