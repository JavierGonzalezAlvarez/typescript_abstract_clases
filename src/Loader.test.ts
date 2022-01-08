import { Loader } from './Loader';

describe('Loader', () => {
  it('should enqueue/dequeue the elements according to their priority', async () => {
    const loader = new Loader();

    expect(await loader.load('./src/db/domains.csv')).toEqual([
      { end: 'b.com', start: 'a.com', weight: 4 },
      { end: 'c.com', start: 'a.com', weight: 2 },
      { end: 'g.com', start: 'b.com', weight: 3 },
      { end: 'd.com', start: 'c.com', weight: 2 },
      { end: 'f.com', start: 'c.com', weight: 4 },
      { end: 'g.com', start: 'd.com', weight: 3 },
      { end: 'f.com', start: 'd.com', weight: 1 },
      { end: 'f.com', start: 'g.com', weight: 1 },
    ]);
  });
});
