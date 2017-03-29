var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    console.log(value)
    stackSize++;
  };

  someInstance.pop = function() {
    var val = storage[stackSize -1];
    delete storage[stackSize];
    stackSize && stackSize--;
    console.log(val)
    return val;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
