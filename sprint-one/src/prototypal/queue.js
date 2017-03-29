

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var littleQueue = Object.create(queueMethods);
  littleQueue.count = 0;
  littleQueue.head = 0;
  littleQueue.currHead = 0;
  littleQueue.storage = {};
  return littleQueue;
};

var queueMethods = {
  size: function() {
   return this.count;
  },
  enqueue: function(val) {
    this.storage[this.head] = val;
    this.head++;
    this.count++;
  },
  dequeue: function() {
    var item = this.storage[this.currHead];
    delete this.storage[this.currHead];
    this.currHead++;
    this.count && this.count--;
    return item;
  }
};







