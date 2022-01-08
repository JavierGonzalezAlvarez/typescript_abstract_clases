export type Id = string;

export abstract class NormalizedWeightedGraph {
  abstract addVertex(vertexId: Id): void;
  abstract addEdge(vertexIdA: Id, vertexIdB: Id, weight: number): void;
  abstract search(startVertexId: Id, endVertexId: Id): Array<Id>;
}

// Add the missing implementation:

export class WeightedGraph extends NormalizedWeightedGraph {

  itemsVertex: any[] = [];
  addVertex(vertexId: Id): void {
    vertexId = vertexId;
    this.itemsVertex.push({ vertexId });
  }

  itemsEdge: any[] = [];
  addEdge(vertexIdA: Id, vertexIdB: Id, weight: number): void {
    vertexIdA = vertexIdA;
    vertexIdB = vertexIdB;
    weight = weight;
    this.itemsEdge.push({ vertexIdA, vertexIdB, weight });
  }

  items: any[] = [];
  items1: any[] = [];
  itemsSort: any[] = [];
  search(startVertexId: Id, endVertexId: Id): Array<Id> {
    startVertexId = startVertexId;
    endVertexId = endVertexId;

    this.items = this.itemsEdge;

    let resultIdA = this.items.map(a => a.vertexIdA);
    let resultIdB = this.items.map(a => a.vertexIdB);
    let resultW = this.items.map(a => a.weight);

    for (let i = 0; i < this.items.length; i++) {
      let j: number = i + 1;
      if (resultIdA[i] == resultIdA[j]) {
        if (resultW[i] > resultW[j]) {
          //add IdB+1
          this.items1.push({ id1: resultIdB[j] });
        }
        else {
          //add IdB
          this.items1.push({ id1: resultIdB[i] });
        }
      }
      else {
        //add IdB+1
        if (resultIdA[i] == resultIdB[j]) {
          this.items1.push({ id1: resultIdA[i] });
        }
      }
    }
    //add search startVertexId & endVertexId
    this.items1.push({ id1: startVertexId });
    this.items1.push({ id1: endVertexId });
    //sort array
    this.itemsSort = this.items1.sort((a, b) => a.id1 < b.id1 ? -1 : a.id1 > b.id1 ? 1 : 0);
    //get values
    let arrayResult = this.itemsSort.map(a => a.id1);
    return arrayResult
  }
}

let addItem = new WeightedGraph();
addItem.addVertex;

let addEdge = new WeightedGraph();
addEdge.addEdge;

let search = new WeightedGraph();
//search.search('a.com', 'g.com');
search.search;

