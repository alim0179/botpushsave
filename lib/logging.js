const getCurrentsTime = require("./getCurrentsTime");

module.exports = (type, info, message) => {
  const time = getCurrentsTime();
  switch (type) {
    case "primary":
      console.log(
        `\n\x1b[1m\x1b[44m LuffyOFC \x1b[0m\x20\x20${time}`,
        `\n\x1b[1m\x1b[34m${info}\x1b[0m :`,
        message
      );
      break;
    case "error":
      console.log(
        `\n\x1b[1m\x1b[41m LuffyOFC \x1b[0m\x20\x20${time}`,
        `\n\x1b[1m\x1b[31m${info}\x1b[0m :`,
        message
      );
      break;
    case "warning":
      console.log(
        `\n\x1b[1m\x1b[43m LuffyOFC \x1b[0m\x20\x20${time}`,
        `\n\x1b[1m\x1b[33m${info}\x1b[0m :`,
        message
      );
      break;
    case "success":
      console.log(
        `\n\x1b[1m\x1b[42m LuffyOFC \x1b[0m\x20\x20${time}`,
        `\n\x1b[1m\x1b[32m${info}\x1b[0m :`,
        message
      );
      break;
    case "info":
      console.log(
        `\n\x1b[1m\x1b[46m LuffyOFC \x1b[0m\x20\x20${time}`,
        `\n\x1b[1m\x1b[36m${info}\x1b[0m :`,
        message
      );
      break;

    default:
      console.log(
        `\n\x1b[1m\x1b[45m LuffyOFC \x1b[0m\x20\x20${time}`,
        `\n\x1b[1m\x1b[35m${info}\x1b[0m :`,
        message
      );
      break;
  }
  return;
};
