// @ts-nocheck 

const logger = require('pino')
const P = require('pino')
const dayjs = require('dayjs')

// import logger, { P } from "pino";
// import dayjs from "dayjs";

const level: string = "info";

const log = logger({
  transport: {
    target: "pino-pretty",
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `,"Time":"${dayjs().format()}"`
});

// export default log
module.exports = log