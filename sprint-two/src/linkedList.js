var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    list.head = list.head || newNode;
    if(list.tail === null){
      list.tail = newNode;
    } else {
      var oldTail = list.tail;
      list.tail = newNode;
      oldTail.next = newNode;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var contains = false;
    var currentNode = list.head;
    while(currentNode !== null) {
      if (currentNode.value === target) {
        contains = true;
        break;
      }
      currentNode = currentNode.next;
    }

    return contains;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
