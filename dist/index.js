#!/usr/bin/env node
import { createInterface } from "readline";
import chalk from "chalk";
import Parser from "./lib/parser.js";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(chalk.bold.blue(" - Put your string here >> "), (userInput) => {
    console.log(chalk.bgCyan("Checking "), userInput);
    const res = Parser(userInput);
    console.log(chalk.bgBlueBright("Parsed Data >> "), res);
    rl.close();
});
