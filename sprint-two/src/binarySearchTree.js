var BinarySearchTree = function(value){
  //this.node = new BinaryNode(value);
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(nodeValue){
  if(nodeValue !== this.value){
    if(nodeValue < this.value){
      if(this.left === null){
        this.left = new BinarySearchTree(nodeValue);
      } else {
        this.left.insert(nodeValue);
      }
    } else {
      if(this.right === null){
        this.right = new BinarySearchTree(nodeValue);
      } else {
        this.right.insert(nodeValue);
      }
    }
  }
}

BinarySearchTree.prototype.contains = function(nodeValue){
  var result = false;
  if(nodeValue === this.value){
    result = true;
  } else {
    if(nodeValue < this.value){
      if(this.left !== null){
        result = result || this.left.contains(nodeValue);
      }
    } else {
      if(this.right !== null){
        result = result || this.right.contains(nodeValue);
      }
    }
  }

  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(cb);
  }

  if(this.right !== null){
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
