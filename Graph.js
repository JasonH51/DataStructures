// https://visualgo.net/en/graphds

// Adjacency List
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    if (!this.adjacentList[node]) {
      return (this.adjacentList[node] = []);
    }
    return false;
  }
  addEdge(node1, node2) {
    const first = this.adjacentList[node1];
    const second = this.adjacentList[node2];
    if (!first.includes(node2) && !second.includes(node1)) {
      first.push(node2);
      second.push(node1);
    }
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;

      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
    }
    console.log(node + '--->' + connections);
  }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(0, 2);
graph.addEdge(1, 6);
graph.addEdge(2, 6);
graph.addVertex(6);

console.log(graph.adjacentList);
