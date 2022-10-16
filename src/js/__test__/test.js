import json from '../parser.js';
import read from '../reader.js';
import main from '../app.js';

test('Function-OK', async () => {
  const data = await main();
    await main();
});

test('Function-ERR', async () => {
  async function main() {
      const resultRead = await Promise.resolve(read());
      const resultJson = await Promise.resolve(json(resultRead));
      return JSON.parse(resultJson);
  };
  
  const data = await main();
  expect(data).toBe('error')
});


