const log4js = require("log4js");

const logger = log4js.getLogger(); // si no le paso nada, toma el default

log4js.configure({
  appenders: {
    fileAppender: { type: "file", filename: "./logs/log4js/file.log" },
    consoleAppender: { type: "console", filename: "./logs/log4js/console" },
    errorsFile: { type: "file", filename: "./logs/log4js/LOGGERS/error.log" },
    warningsFile: { type: "file", filename: "./logs/log4js/warn.log" },
    fatalsFile: { type: "file", filename: "./logs/log4js/fatal.log" },
  },
  categories: {
    myLogCustom: { appenders: ["consoleAppender"], level: "trace" },
    default: { appenders: ["consoleAppender"], level: "trace" },
    consola: { appenders: ["consoleAppender"], level: "debug" },
    info: { appenders: ["consoleAppender"], level: "info" },

    // error: { appenders: ["consoleAppender"], level: "error" },
    // warn: { appenders: ["consoleAppender"], level: "warn" },
    // fatal: { appenders: ["consoleAppender"], level: "fatal" },

    error: { appenders: ["consoleAppender", "errorsFile"], level: "error" },
    warn: { appenders: ["consoleAppender", "warningsFile"], level: "warn" },
    fatal: { appenders: ["consoleAppender", "fatalsFile"], level: "fatal" },
  },
});
/*
TRACE
DEBUG
INFO
WARN
ERROR
FATAL
*/

logger.level = "trace"; // de este nivel en adelante voy a ver

const ej1 = () => {
  logger.trace("Fn ej1 trace"); // [2026-01-29T12:39:01.689] [TRACE] default - Fn ej1 -
  logger.debug("Fn ej1 debug");
  logger.info("Fn ej1 info");
  logger.warn("Fn ej1 warn");
  logger.error("Fn ej1 error");
  logger.fatal("Fn ej1 fatal");
};

ej1();
