const winston = require("winston");

const logConfig = {
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
