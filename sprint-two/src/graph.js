//Notes for tomorrow when you don't remember
//addNode is complete.
//edges will be an array that represents a pointer to any other node that it is connected to, represented by a value (which is a string FYI)
//

// Instantiate a new graph
var Graph = function() {
    
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this[value] = {edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // check if this[node].edges length is > 0
  if(this[node].edges.length > 0){
    // if so, use forEachNode on this[node].edges to perform this[node].removeEdge(node, fromNode[i])
    this.forEachNode(function(node2){
      for(let i = 0; i < node2.edges.length; i++){
        this.removeEdge(node, node2.edges[i]);
      }
    });
  }    
  // delete this[node]
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if this[fromNode].edges contains toNode
  return this[fromNode].edges.includes(toNode);

    //check if this[toNode].edges contains fromNode
      // return true
  // return false

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if does not have edge
  if(!this[fromNode].edges.includes(toNode)){
    // push 'toNode' to this[fromNode].edges
    // push 'fromNode' to this[toNode].edges
    this[fromNode].edges.push(toNode);
    this[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // loop through this[fromNode].edges to find 'toNode'
  for(let i = 0; i < this[fromNode].edges.length; i++){
    // if 'toNode' is found, splice(this[fromNode].edges.indexOf(toNode), 1);
    if(this[fromNode].edges[i] === toNode){
      this[fromNode].edges.splice(i, 1);
    }
  }
    // loop through this[toNode].edges to find 'fromNode'
  for(let i = 0; i < this[toNode].edges.length; i++){
    // if 'fromNode' is found, splice(this[toNode].edges.indexOf(fromNode), 1);
    if(this[toNode].edges[i] === fromNode){
      this[toNode].edges.splice(i, 1);
    }
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


