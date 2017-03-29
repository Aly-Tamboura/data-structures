var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var littleStack = Object.create(stackMethods);
  littleStack.count = 0;
  littleStack.storage = {};
  return littleStack;
};

var stackMethods = {
	size: function(){
	  return this.count;
	},
	pop: function() {
	  var item = this.storage[this.count - 1];
	  this.count && this.count--;
	  delete this.storage[this.count];
	  return item;
	},
	push: function(val) {
	  this.storage[this.count] = val;
      this.count++;
	}

};


