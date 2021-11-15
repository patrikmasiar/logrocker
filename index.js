'use-strict';

module.exports = Logger = {
  log: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      return console.log(...args);
    }
  },
  info: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      return console.info(...args);
    }
  },
  warn: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      return console.warn(...args);
    }
  },
  error: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      return console.error(...args);
    }
  },
};