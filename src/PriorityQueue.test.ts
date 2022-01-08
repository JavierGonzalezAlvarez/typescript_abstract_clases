import { PriorityQueue } from './PriorityQueue';

describe('PriorityQueue', () => {
  it('should enqueue/dequeue the elements according to their priority', () => {
    const queue = new PriorityQueue();

    queue.enqueue('a.com', 2);
    queue.enqueue('b.com', 3);
    queue.enqueue('c.com', 4);
    queue.enqueue('d.com', 6);
    queue.enqueue('e.com', 5);
    queue.enqueue('f.com', 7);
    queue.enqueue('g.com', 1);

    expect(queue.dequeue()).toEqual('g.com');
    expect(queue.dequeue()).toEqual('a.com');
    expect(queue.dequeue()).toEqual('b.com');
    expect(queue.dequeue()).toEqual('c.com');
    expect(queue.dequeue()).toEqual('e.com');
    expect(queue.dequeue()).toEqual('d.com');
    expect(queue.dequeue()).toEqual('f.com');
    expect(queue.dequeue()).toEqual(undefined);
  });
});
