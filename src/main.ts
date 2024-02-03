import figlet from 'figlet';
import { Command } from 'commander'
import dotenv from 'dotenv/config'

import { day1 } from './day1';

function main() {
  const mainHeader = figlet.textSync('Advent of Code 2023');
  console.log(mainHeader);

  const program = new Command();
  program
    .version(process.env.VERSION || '0.0.0')
    .description('Advent of code collection in TS.')
    .option('-d, --day <daynumber>', 'Run the solution for the given day')
    .option('-i, --input <filename>', 'Input file name.')
    .parse(process.argv);
  
  const options = program.opts();

  if (options.day) {
    console.log(figlet.textSync(`Day ${1}`));
    switch (options!.day) {
      case '1': {
        day1(options.input);
        break;
      }
    }
  }
}

main();