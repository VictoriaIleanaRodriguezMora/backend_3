const winston = require("winston");

const logConfig = {
  level: "info",
  transports: [
    new winston.transports.Console({ level: "silly" }),
    new winston.transports.File({
      filename: "./logs/logger.log",
      level: "warn",
    }),
  ],
};

const logger = winston.createLogger(logConfig);
module.exports = { logger };
