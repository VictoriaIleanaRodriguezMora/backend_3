const winston = require("winston");
require("winston-mongodb");

// VEO TODO POR CONSOLA Y EN BDD SOLO ERROR

const logConfig = {
  transports: [
    new winston.transports.Console({ level: "silly" }),
    winston.add(
      new winston.transports.MongoDB({
        // options: { useUnifiedaTopology: true },
        db: "mongodb:localhost:27017/", // compass
        collection: "logs",
        level: "error",
        tryReconnect: true,
      }),
    ),
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


logger.silly("log silly");
logger.debug("log debug");
logger.verbose("log verbose");
logger.info("log info");
logger.http("log http");
logger.warn("log warn");
logger.error("log error");
