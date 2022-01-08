export abstract class NormalizedPriorityQueue<T> {
  abstract enqueue(value: T, priority: number): void;
  abstract dequeue(): T | undefined;
}

// Add the missing implementation:

export class PriorityQueue<T> extends NormalizedPriorityQueue<T> {
  itemsEnqueue: any[] = [];
  enqueue(value: T, priority: number): void {
    value = value;
    priority = priority;
    this.itemsEnqueue.push({ value, priority });
  }

  itemsDequeue: any[] = [];
  dequeue(): T | undefined {
    //sort
    this.itemsDequeue = this.itemsEnqueue.sort((a, b) => a.priority < b.priority ? -1 : a.priority > b.priority ? 1 : 0);
    //taking first element
    let result = this.itemsDequeue.map(a => a.value);
    if (result == undefined) {
      console.log("result is undefined");
    }
    //delete first element of the array
    this.itemsDequeue.shift();
    let TAa: T | undefined;
    TAa = result[0];
    return TAa;;
  }
}

let taskQueue = new PriorityQueue();
taskQueue.enqueue;

let taskDequeue = new PriorityQueue<String>();
taskDequeue.dequeue();
