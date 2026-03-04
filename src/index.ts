import * as chalk from "chalk";

console.clear();

console.log(chalk.cyanBright.bold(`
█▀█ █░ ▄▀█ █▄░█ █▀▀ ▀█▀
█▀▀ █▄ █▀█ █░▀█ ██▄ ░█░
`));

console.log(chalk.greenBright.bold("Selamat datang di planet Baileys!\n"));

console.log(chalk.whiteBright("Owner   : ") + chalk.yellowBright("@planetoffc"));
console.log(chalk.whiteBright("Version : ") + chalk.yellowBright("29.0.0"));
console.log(chalk.whiteBright("Update  : ") + chalk.yellowBright("Fix Error Pairing"));

console.log(chalk.gray("\n----------------------------------\n"));

console.log(chalk.magentaBright.bold("Selamat menggunakan Baileys planet ya!\n"));

import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
