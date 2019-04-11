var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
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


