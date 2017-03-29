var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0;
  stack.storage = {};
  _.extend(stack,stackMethods);
  return stack;

};

var stackMethods = {};

stackMethods.size = function(){
  return this.count;
};

stackMethods.push = function(val){
  this.storage[this.count] = val;
  this.count++;
};

stackMethods.pop = function(){
  var item = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count && this.count--;
  return item;
};
