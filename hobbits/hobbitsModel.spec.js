const db = require('../data/dbConfig');

const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('insert()', () => {
    it('should insert the hobbit into the db', async () => {
      await Hobbits.insert({ name: 'Hu13' });

      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(1);
    });
  });

  describe('insert()', () => {
    it('should insert the hobbit into the db', async () => {
      await Hobbits.insert({ name: 'Hun1ter' });
      await Hobbits.insert({ name: 'To1adstool' });

      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(2);
    });
  });
});
