var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);

};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    result = true;
  } else {
    this.children.forEach(function(childTree){
      result = childTree.contains(target);
    });
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
