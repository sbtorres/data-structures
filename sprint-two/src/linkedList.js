var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(this.head === null) {
      var currentNode = Node(value);
      this.head = currentNode;
      this.tail = currentNode;
    } else {
      var nextNode = Node(value);
      this.tail.next = nextNode;
      this.tail = nextNode;
    }
  };

  list.removeHead = function() {
    var holder = this.head.value;
    this.head = this.head.next;
    return holder;
  };

  list.contains = function(target) {
    var node = this.head;

    while(node.value !== target){
      node = node.next;
      if (node === null) {
        return false;
      }
    }
    
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //modify tail and next when we call addToTail()
