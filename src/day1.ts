import fs from 'fs'
import { FileHandle } from 'fs/promises';

function stringToDigit(word: String): number {
  if (word.includes('zero')) {
    return 0;
  } else if (word.includes('one')) {
    return 1;
  } else if (word.includes('two')) {
    return 2;
  } else if (word.includes('three')) {
    return 3;
  } else if (word.includes('four')) {
    return 4;
  } else if (word.includes('five')) {
    return 5;
  } else if (word.includes('six')) {
    return 6;
  } else if (word.includes('seven')) {
    return 7;
  } else if (word.includes('eight')) {
    return 8;
  } else if (word.includes('nine')) {
    return 9;
  }

  return 10;
}

function revStringtoDigit(word: String): number {
  return stringToDigit(word.split('').reverse().join(''));
}

export async function day1(path: string): Promise<Number> {
  let file: FileHandle | undefined;

  try {
    file = await fs.promises.open(path, 'r');
    let result = 0;
    let lineRes = 0;
    let word = '';
    for await (const line of file.readLines()) {
      lineRes = 0;
      for (let i = 0; i < line.length; i++) {
        if (line[i] >= '0' && line[i] <= '9') {
          lineRes = Number(line[i]);
          break;
        } else {
          word += line[i];
          let possibleDigit = stringToDigit(word);
          if (possibleDigit < 10) {
            lineRes = possibleDigit;
            break;
          }
        }
      }
      word = '';
      for (let i = line.length - 1; i >= 0; i--) {
        if (line[i] >= '0' && line[i] <= '9') {
          lineRes = lineRes * 10 + Number(line[i]);
          break;
        } else {
          word += line[i];
          let possibleDigit = revStringtoDigit(word);
          if (possibleDigit < 10) {
            lineRes = lineRes * 10 + possibleDigit;
            break;
          }
        }
      }
      result += lineRes;
    }
    console.log('Result: ', result)
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await file?.close();
  }
}
