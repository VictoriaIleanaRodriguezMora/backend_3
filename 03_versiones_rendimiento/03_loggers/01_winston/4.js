const winston = require("winston");
const { format } = winston;
const { combine, colorize, printf, timestamp } = format;

// el info.level seria "silly"
// {"level":"silly","message":"log silly"}

const logConfig = {
  level: "info",
  format: combine(
    timestamp({
      format: "DD-MM-YYYY ss:mm:HH",
    }),
    colorize(),
    printf((info) => {
      return `${info.level} | ${info.timestamp} | ${info.message}`;
    }),
  ),
  transports: [new winston.transports.Console()],
};

const logger = winston.createLogger(logConfig);

/* 
{
    error: 0,
    warn: 1
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
}
*/

logger.silly("log silly");
logger.debug("log debug");
logger.verbose("log verbose");
logger.info("log info");
logger.http("log http");
logger.warn("log warn");
logger.error("log error");

/*
 node 4.js
info | 29-01-2026 40:56:13 | log info
warn | 29-01-2026 40:56:13 | log warn
error | 29-01-2026 40:56:13 | log error
*/
