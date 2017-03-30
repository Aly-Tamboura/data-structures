var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currhead = 0;
  this.head = 0;
  this.count = 0;
};

Queue.prototype.size = function() {
  return this.count;
}

Queue.prototype.enqueue = function(val) {
   this.storage[this.head] = val;
   this.head++;
   this.count++;
}

Queue.prototype.dequeue = function() {
  var item = this.storage[this.currhead];
  delete this.storage[this.currhead];
  this.currhead++;
  this.count && this.count--;
  return item;
}
