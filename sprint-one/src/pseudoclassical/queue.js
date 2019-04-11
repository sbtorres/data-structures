var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.size() + 1] = value;
};

Queue.prototype.dequeue = function(){
  var dequeued = this.storage['1'];
  delete this.storage[1];
  for(var key in this.storage){
    this.storage[Number(key) - 1] = this.storage[key];
  }
  delete this.storage[this.size()];
  return dequeued;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};


