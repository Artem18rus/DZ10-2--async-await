import json from '../parser.js';
import read from '../reader.js';
import GameSavingLoader from '../app.js';

//jest.setTimeout(15000);
test('Function-OK1', async (done) => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual('{id: 9, created: 1546300800, userInfo: { id: 1, name: "Hitman", level: 10, points: 2000}}');
  done();
});


