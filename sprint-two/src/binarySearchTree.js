var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  var search = function(node) {
    if (value === node.value) {
      return;
    } else if (value < node.value) {
      if (node.left === undefined) {
        node.left = new BinarySearchTree(value);
      } else {
        search(node.left);
      }
    } else {
      if (node.right === undefined) {
        node.right = new BinarySearchTree(value);
      } else {
        search(node.right);
      }
    }
  };
  search(this);
};

BinarySearchTree.prototype.contains = function(value) {

  var search = function(node) {
    if (value === node.value) {
      return true;
    }
    if (value < node.value) {
      if (node.left) {
        return search(node.left);
      }
    }
    if (value > node.value) {
      if (node.right !== undefined) {
        return search(node.right);
      }
    }
    return false;
  };
  return search(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (!this.left && !this.right) {
    return;
  }
  if (this.left) {
    this.depthFirstLog.call(this.left, cb);
  }
  if (this.right) {
    this.depthFirstLog.call(this.right, cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

