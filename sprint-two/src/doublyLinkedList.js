
var DoublyLinkedList = function () {
  var dlist = Object.create(doubleMethods);
  dlist.head = null;
  dlist.tail = null;
  return dlist

};
var doubleMethods = {};

doubleMethods.addToTail = function(value) {

};

doubleMethods.removeHead = function(value) {

};

doubleMethods.contains = function(value) {

};

var DoubleNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
}; 