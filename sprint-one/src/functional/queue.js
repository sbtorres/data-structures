var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  // New item in the queue added the end.
  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    if (value === undefined) {
      return;
    }

    if (keys.length === 0){
      storage['1'] = value;
    } else {
      storage[keys.length + 1] = value;
    }
    return storage;
  };

  // Remove the next up item.
  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var dequeued = storage[keys[0]];
    delete storage[keys[0]];
    for(var key in storage){
      var newKey = Number(key) - 1;
      storage[newKey] = storage[key];
    }
    delete storage[keys.length];
    return storage;
  };

  // Return size of queue
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
