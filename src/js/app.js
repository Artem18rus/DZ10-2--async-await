import json from './parser.js';
import read from './reader.js';

export default async function main() {
  try {
    const resultRead = await Promise.resolve(read());
    const resultJson = await Promise.resolve(json(resultRead));
    return JSON.parse(resultJson);
  }
  catch(e) {
    return 'error';
  }
}