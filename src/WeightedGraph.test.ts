import { WeightedGraph } from './WeightedGraph';

describe('WeightedGraph', () => {
  it('should find the shortest distance between 2 domains', () => {
    const graph = new WeightedGraph();

    graph.addVertex('a.com');
    graph.addVertex('b.com');
    graph.addVertex('c.com');
    graph.addVertex('d.com');
    graph.addVertex('e.com');
    graph.addVertex('g.com');
    graph.addVertex('f.com');

    graph.addEdge('a.com', 'b.com', 4);
    graph.addEdge('a.com', 'c.com', 2);
    graph.addEdge('b.com', 'g.com', 3);
    graph.addEdge('c.com', 'd.com', 2);
    graph.addEdge('c.com', 'f.com', 4);
    graph.addEdge('d.com', 'g.com', 3);
    graph.addEdge('d.com', 'f.com', 1);
    graph.addEdge('e.com', 'f.com', 2);
    graph.addEdge('g.com', 'f.com', 1);

    expect(graph.search('a.com', 'g.com')).toEqual([
      'a.com',
      'c.com',
      'd.com',
      'f.com',
      'g.com',
    ]);
  });
});
