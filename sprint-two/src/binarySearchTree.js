var BinarySearchTree = function(value) {
  this.right = null;
  this.left = null;
  this.value = value;
};


BinarySearchTree.prototype.insert = function(value) {
  var tree = new BinarySearchTree(value);
  if (this.value < tree.value && this.right === null) {
    this.right = tree;
  }
  if (this.value > tree.value && this.left === null) {
    this.left = tree;
  }
  //check the right side
  if (this.value < tree.value) {
    //recurse right
    this.right.insert(tree.value);
  }
//check the left side
  if (this.value > tree.value) {
     //recurse left
    this.left.insert(tree.value);
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var found = false;
  var search = function(node) {
    if (node !== undefined) {
      if (node && node.value === target ) {
        found = true;
      }
      if (node.right && node.value < target) {
        node = node.right;
        search(node);      
      } else {
        if (node.left && node.value > target) {
          node = node.left;
          search(node);
        }
      }
    }
  };
  search(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // body...
  var reachedEnd = false;
  var traversal = function(node) {
    while (!reachedEnd) {
      if (node.left === null && node.right === null) {
        cb(node.value);
        reachedEnd = true;
      } else if (node.left && node.right === null) {
        var leftNode = node.left;
        cb(node.value);
        traversal(leftNode);
      } else if (node.right && node.left === null) {
        var rightNode = node.right;
        cb(node.value);
        traversal(rightNode);
      }
    }
  };
  traversal(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
