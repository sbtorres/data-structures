
//We're making a function (class) that creates an object with an 3-level array with the levels being represented by
// 1 - storage (Hash Table itself)
// 2 - bucket
// 3 - tuple (key-value pair)
var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);

  for (let i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];

  var bucket = this._storage.get(index);
  
  for (let i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      bucket[i][1] = v;
      this._storage.set(index, bucket);
      return;
    }
  }

  bucket.push(tuple);
  this._storage.set(index, bucket);
  this._count++;
  if (this._count > 0.75 * this._limit) {
    this._resize(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (let i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (let i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      bucket.splice(i, 1);
      this._storage.set(index, bucket);
      this._count--;
      if (this._count < 0.25 * this._limit) {
        this._resize(this._limit / 2);
      }
      break;
    }
  }
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = LimitedArray(newLimit);

  for (let i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }

  oldStorage.each(function(tuple) {
    if (tuple.length > 0) {
      for (let j = 0; j < tuple.length; j++) {
        this.insert(tuple[j][0], tuple[j][1]);
      } 
    } 
    
  }.bind(this));

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


