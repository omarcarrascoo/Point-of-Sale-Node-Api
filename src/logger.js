const log4js = require('log4js')

// log4js.configure({
//     appenders: {
//         miLoggerConsole: {type: "console"},
//         miLoggerFile : {type: 'file', filename: 'info.log'},
//         miLoggerFile2 : {type: 'file', filename: 'info2.log'}
//     },
//     categories: {
//         default: { appenders: ["miLoggerConsole"], level: "trace" },
//         consola: { appenders: ["miLoggerConsole"], level: "debug" },
//         archivo: { appenders: ["miLoggerFile"], level: "warn" },
//         archivo2: { appenders: ["miLoggerFile2"], level: "info" },
//         todos: { appenders: ["miLoggerConsole", "miLoggerFile"], level: "error" }
//     }
// })

// const logger = log4js.getLogger('archivo2');
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.")



//segundo ejemplo
log4js.configure({appenders: {
    // defino dos soportes de salida de datos
    consola: { type: 'console' },archivo: { type: 'file', filename: 'errores.log' },
    // defino sus niveles de logueo
    loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
    loggerArchivo: { type: 'logLevelFilter', appender: 'archivo', level: 'error' }
    },
    categories: {
        default: { appenders: ['loggerConsola'], level: 'all' },
        custom: { appenders: ['loggerConsola', 'loggerArchivo'], level: 'all' }
    }
})