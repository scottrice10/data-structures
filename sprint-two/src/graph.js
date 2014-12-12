

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  var newNode = new GraphNode(node);
  this.nodes[node] = newNode;
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];
  var foundFrom = false;
  var foundTo = false;
  from.links.forEach(function(fromLink){
    if (fromLink === toNode) {
      foundFrom = true;
    }
  });
  to.links.forEach(function(toLink){
    if (toLink === fromNode) {
      foundTo = true;
    }
  });
  return (foundFrom && foundTo);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];
  to.links.push(from.value);
  from.links.push(to.value);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from = this.nodes[fromNode];
  var to = this.nodes[toNode];
  var fromIndex = from.links.indexOf(toNode);
  var toIndex = to.links.indexOf(fromNode);
  if (fromIndex > -1 && toIndex > -1) {
    from.links.splice(fromIndex, 1);
    to.links.splice(toIndex, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(value) {
  this.value = value;
  this.links = [];
};

