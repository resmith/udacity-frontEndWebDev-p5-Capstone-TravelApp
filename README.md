# Project Instructions

## Purpose

The purpose of this application is to demonstrate:

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
API_KEY=<yourAPiKey - without quotes>
```

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
npm run test
```

## Meaning Cloud API

Meaning Cloud provides a _sentiment_ analysis of text. Provide it with text and additional paramters and it provides:

```
    "agreement": "AGREEMENT",
    "subjectivity": "OBJECTIVE",
    "confidence": "100",
    "irony": "NONIRONIC",
```

### Reference

[Api](https://www.meaningcloud.com/developer/sentiment-analysis)

[Request](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/request)

[Example](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples)

[Dev Tools](https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools)

[Console](https://www.meaningcloud.com/developer/sentiment-analysis/console)
