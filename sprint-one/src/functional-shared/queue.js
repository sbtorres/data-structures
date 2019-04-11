var extend = function(dest, targ){
  for(key in targ){
    dest[key] = targ[key];
  }
};

var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};
  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.size() + 1] = value;
    return this.storage;
  },

  dequeue : function() {

    var dequeued = this.storage['1'];

    delete this.storage['1'];

    for(var key in this.storage){
      this.storage[Number(key) - 1] = this.storage[key];
    }

    delete this.storage[this.size()];
    return dequeued;
  },
  size: function(){
    return Object.keys(this.storage).length;
  }
};
