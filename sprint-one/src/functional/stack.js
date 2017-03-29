var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    var val = storage[stackSize -1];
    delete storage[stackSize];
    stackSize && stackSize--;
    return val;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
