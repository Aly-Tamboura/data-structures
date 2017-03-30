var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if(this.head === null && this.tail === null){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var oldHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
  // var node = this.head;
  // // console.log(node)
  // if( node.value === target ) {
  //   return true;
  // }
  // if(node.next) {
  //   console.log('found more nodes', node.next);
  //   console.log(contains(target));
  // }

  var startingNode = this.head;

  while(startingNode !== null){
    console.log(startingNode);
    if (startingNode.value === target){
      return true;
    }
    startingNode = startingNode.next;
  }
  return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
