var extend = function(dest, targ){
  for(key in targ){
    dest[key] = targ[key];
  }
}

var Queue = function() {
  var someInstance = {};

  someInstance .storage = {};
  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue : function(value) {
    var keys = Object.keys(this.storage);
    this.storage[keys.length + 1] = value;
    return this.storage;
  },

  dequeue : function() {
    var keys = Object.keys(this.storage);
    var dequeued = this.storage[keys[0]];

    delete this.storage[keys[0]];

    for(var key in this.storage){
      this.storage[Number(key) - 1] = this.storage[key];
    }

    delete this.storage[keys[keys.length-1]];
    return dequeued;
  },
  size: function(){
    debugger;
    return Object.keys(this.storage).length;
  }
};
