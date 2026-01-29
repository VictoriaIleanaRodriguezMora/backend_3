const winston = require("winston");

// Si no le indico un nivel al transports, va a tomar el que le digo en 'lvel'

const logConfig = {
  level: "info",
  transports: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({
      filename: "./logs/winston/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "./logs/winston/info.log",
    }),
  ],
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

logger.level = "silly";

logger.silly("log silly");
logger.debug("log debug");
logger.verbose("log verbose");
logger.info("log info");
logger.http("log http");
logger.warn("log warn");
logger.error("log error");

/*
node wins.js
{"level":"silly","message":"log silly"}
{"level":"debug","message":"log debug"}
{"level":"verbose","message":"log verbose"}
{"level":"info","message":"log info"}
{"level":"http","message":"log http"}
{"level":"warn","message":"log warn"}
{"level":"error","message":"log error"}
*/
