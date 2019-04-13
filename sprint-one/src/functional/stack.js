var Stack = function() {
  var someInstance = {};

  var storage = {};
    
  someInstance.push = function(value) {
    if (value === undefined) {
      return;
    }
    
    var keys = Object.keys(storage);

    if (keys.length === 0){
      storage['1'] = value;
    } else {
      var next = keys.length + 1;
      storage[next] = value;
    }
    return storage;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var popped = storage[keys.length];
    delete storage[keys.length];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};