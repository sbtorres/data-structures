// Instantiate a new graph
var Graph = function() {
    
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this[value] = {edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for(var node of Object.keys(this)){
    if(node === target + '') {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this[node].edges.length > 0){
    this.forEachNode(function(node2){
      for(let i = 0; i < this[node2].edges.length; i++){
        this.removeEdge(node, this[node2].edges[i]);
      }
    }.bind(this));
  }    
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(!this[fromNode].edges.includes(toNode)){
    this[fromNode].edges.push(toNode);
    this[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(let i = 0; i < this[fromNode].edges.length; i++){
    if(this[fromNode].edges[i] === toNode){
      this[fromNode].edges.splice(i, 1);
    }
  }

  for(let i = 0; i < this[toNode].edges.length; i++){
    if(this[toNode].edges[i] === fromNode){
      this[toNode].edges.splice(i, 1);
    }
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var node of Object.keys(this)){
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
graph.addNode('a');
graph.contains('a');