declare module 'logrocker' {
  const Logger: {
    log(...args: any): void;
    info(...args: any): void;
    warn(...args: any): void;
    error(...args: any): void;
  };

  export default Logger;
}