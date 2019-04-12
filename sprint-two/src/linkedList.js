var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      var currentNode = Node(value);
      list.head = currentNode;
      list.tail = currentNode;
    } else {
      var nextNode = Node(value);
      list.tail.next = nextNode;
      list.tail = nextNode;
    }
  };

  list.removeHead = function() {
    var holder = list.head.value;
    list.head = list.head.next;
    return holder;
  };

  list.contains = function(target) {
    var node = list.head;

    while (node.value !== target) {
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

