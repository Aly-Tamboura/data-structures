var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var found = false;
  _.each(this._storage, function(ele) {
    if (ele === item) {
      found = true;
    }
  });
  return found;
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
