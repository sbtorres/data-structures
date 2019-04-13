var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};

var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.size() + 1] = value;
  },
  pop: function(){
    var popped = this.storage[this.size()];
    delete this.storage[this.size()];
    return popped;
  },
  size: function(){
    return Object.keys(this.storage).length;
  }
};


