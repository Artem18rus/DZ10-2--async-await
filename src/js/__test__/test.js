import json from '../parser.js';
import read from '../reader.js';
import main from '../app.js';

test('Function-ERR1', async () => {
  const data = await main();
  try {
    await main();
  }
  catch (e) {
    expect(e.name).toEqual('error');
  }
});


