var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeInstance = Tree(value);
  this.children.push(treeInstance);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

var tree = Tree();
tree.addChild(5);
tree.contains(5);

/*
 * Complexity: What is the time complexity of the above functions?
 */
