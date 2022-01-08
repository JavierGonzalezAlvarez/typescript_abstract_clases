#  abstract classes: csv loader, priority queue and weighted graph with typescript

without using external dependencies

## CSV Loader

Implementing the abstract `NormalizedLoader` class present in `./src/Loader.ts`. This implementation should allow the user to load the content of the `./src/db.csv` CSV file to pass the `./src/Loader.test.ts` test.

## priority queue

Implementing the abstract `NormalizedPriorityQueue` class present in `./src/PriorityQueue.ts`. This implementation should allow the user to enqueue/dequeue a task depending on its relative priority to pass the `./src/PriorityQueue.test.ts` test. In our context, a task with a priority equal to `1` has a higher priority than a task with a priority equal to `2` or more.

## weighted Graph

Implementing the abstract `NormalizedWeightedGraph` class present in `./src/WeightedGraph.ts`. This implementation should allow the user to find the distance between 2 domains to pass the `./src/WeightedGraph.test.ts`. In our context, a frequent redirection between a domain `a.com` to `b.com` will have a distance equal to `1`, where a less frequent redirection between those two domains will have a distance equal to `2` or more.

## Usage
1. Install Dependencies

$ npm install

2. Running the tests with [Jest]

$ npm run test
or one specific test
$ npm run test -- Loader
$ npm run test -- PriorityQueue
$ npm run test -- WeightedGraph

