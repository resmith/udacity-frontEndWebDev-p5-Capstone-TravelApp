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
SESSION_KEY=<key>
PORT=<Port#>
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

- Ensure that the .env has the appropriate keys setup:

API_GEONAME_KEY=<yourAPiKey - without quotes>
API_WEATHERBIT_KEY=<yourAPiKey - without quotes>
API_PIXABAY_KEY=<yourAPiKey - without quotes>

Then:

```
cd <directoryClonedTo>
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

- Input: City
- Return: Coordinates (latitude, longitude, country,)

[Geonames API](http://www.geonames.org/export/web-services.html)

### WeatherBit

- Input: Zip Code
- Send: Weather Forecast

[WeatherBit API](https://www.weatherbit.io/api)

- Input: Coordinate
- Return: Weather Forecast

## Rest Pixabay

[Pixabay API](https://pixabay.com/api/docs/)

- Input: Coordinate
- Return: Images of the area

## Rest Countries

[Rest Countries](https://restcountries.eu/)

- Input: Location
- Return: Information about the country

## Additional Requirement Integrated

- Integrate the REST Countries API to pull in data for the country being visited.

## Additional Notes

[How to include .env automatically in Jest Testing](https://medium.com/swlh/how-to-setup-dotenv-globally-with-jest-testing-in-depth-explanation-323fad824485)
