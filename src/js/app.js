import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        read()
          .then((val) => val)
          .then((data) => {
            const value = json(data);
            resolve(value);
          });
      }, 1000);
    });
  }
}

GameSavingLoader.load().then((saving) => {
  return JSON.parse(saving);
}, (error) => {
  return error;
});
