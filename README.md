# About

> OpenAI's API client for browser and node 


## Features

- Uses vanilla JS with no dependencies on external libararies
- Can be used with Chrome extensions background scripts
- Modern browsers support
- Small in size (6kb)

## Getting started

Follow guide below to get started -

## Install

```bash
npm install openai-clinet-js
```


## Usage


```Javascript
  
  import OpenaiClient from "openai-client-js"
  
  const client = new OpenaiClient({
       key: "YOUR_OPENAI_API_KEY"
  });
  
  // Use available client methods
  client.createCompletion(options);
  client.chatCompletion(options);
  client.createEdit(options);
```

# Links

[![npm package][npm-img]][https://www.npmjs.com/package/openai-client-js]


**_NOTE_** - Actively being developed. Please report for any issues. 
