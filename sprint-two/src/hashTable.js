

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupal = [k, v];
  //check for bucket
  if (this._storage.get(index)) {
    //if exists add key value pair to bucket
    this._storage.get(index).push(tupal);
  } else {
    //if not create bucket
    var bucket = [];
    //push tupal with key value pair
    bucket.push(tupal);
    //add bucket to hashtable	
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item) {
    _.each(item, function(list) {
      if (list[0] === k) {
        result = list[1];
      }
    });
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  console.log(bucket);
  _.each(bucket, function(tupal, i) {
    if (tupal[0] === k) {
      bucket.splice(0, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


