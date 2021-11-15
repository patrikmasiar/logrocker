# Logrocker
Simple development debugger
[logrocker.com](https://logrocker.com)

[![NPM](https://img.shields.io/npm/l/logrocker)](https://github.com/patrikmasiar/logrocker/blob/main/LICENSE)

## Installation
```bash
npm install logrocker
```
```bash
yarn add logrocker
```

## Usage
```javascript
import Logger from 'logrocker';

...

// Example 1
Logger.log("Hello world 👋🏻");

// Example 2
try {
  ...
} catch (e) {
  Logger.error("Something went wrong.", e);
}
```
