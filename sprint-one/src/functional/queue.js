var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var head = 0;
  var currentHead = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[head] = value;
    head++;
    counter++;
  };

  someInstance.dequeue = function() {
    var val = storage[currentHead];
    delete storage[currentHead];
    currentHead++;
    counter && counter--;
    return val;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
