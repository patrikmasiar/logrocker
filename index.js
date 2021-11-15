'use-strict';

module.exports = Logger = {
  log: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      console.log(...args);
    }
  },
  info: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      console.info(...args);
    }
  },
  warn: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      console.warn(...args);
    }
  },
  error: function(...args) {
    if (process.env.NODE_ENV === 'production') {
      console.error(...args);
    }
  },
};