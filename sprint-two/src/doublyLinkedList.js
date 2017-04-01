
var DoublyLinkedList = function () {
  var dlist = Object.create(doubleMethods);
  dlist.head = null;
  dlist.tail = null;
  return dlist;

};
var doubleMethods = {};

doubleMethods.addToTail = function(value) {
  var newDoubleNode = new DoubleNode(value);
  if (this.head === null && this.tail === null){
  	this.head = newDoubleNode;
  	this.tail = newDoubleNode;
  }
  var previousTail = this.tail;
  this.tail.next = newDoubleNode;
  this.tail = newDoubleNode;
  this.tail.previous = previousTail;
};

doubleMethods.removeHead = function() {
  var headValue = this.head.value;
  this.head = this.head.next;
  this.head.previous = null;
  return headValue;

};

doubleMethods.contains = function(target) {
  var node = this.head;
  while(node) {
  	if(node.value === target) {
  		return true;
  	} else {
  	  node = node.next;
  	}
  }
  return false;
};

doubleMethods.addToHead = function(value) {
  var node = new DoubleNode(value);
  var previousHead = this.head;
  this.head = node;
  this.head.next = previousHead;
};

doubleMethods.removeTail = function() {
  var oldTail = this.tail;
  this.tail = this.tail.previous;
  this.tail.next = null;
};



var DoubleNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
}; 