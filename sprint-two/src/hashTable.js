
//We're making a function (class) that creates an object with an 3-level array with the levels being represented by
// 1 - storage (Hash Table itself)
// 2 - bucket
// 3 - tuple (key-value pair)
var HashTable = function() {
  this._limit = 8;
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
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


