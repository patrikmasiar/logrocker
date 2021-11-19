'use-strict';

module.exports = Logger = {
  log: function(...args) {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  info: function(...args) {
    if (process.env.NODE_ENV === 'development') {
      console.info(...args);
    }
  },
  warn: function(...args) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...args);
    }
  },
  error: function(...args) {
    if (process.env.NODE_ENV === 'development') {
      console.error(...args);
    }
  },
};