var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.count = 0;
  queue.head = 0;
  queue.currHead = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function(val) {
  this.storage[this.head] = val;
  this.head++;
  this.count++;
};

queueMethods.dequeue = function() {
  var item = this.storage[this.currHead];
  delete this.storage[this.currHead];
  this.currHead++;
  this.count && this.count--;
  return item;
};