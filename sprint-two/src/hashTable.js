var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];

  for(var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if(tuple[0] === k) {
      tuple[1] = v;
    }
  }

  tupleArray.push([k, v]);
  this._storage.set(i, tupleArray);
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];

  for(var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if(tuple[0] === k) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];

  for(var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if(tuple[0] === k) {
      tuple[1] = null;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
