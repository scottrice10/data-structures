var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];
  var found = false;
  //tupleArray.each(function(value){
  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    var key = tuple[0];
    //var value = value[1];
    if (key === k) {
      found = true;
      tuple[1] = v;
    }
  };
  if (!found) {
    tupleArray.push([k, v]);
  }
  this._storage.set(i, tupleArray);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];
  var foundValue = null;
  //tupleArray.each(function(value){
  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    var key = tuple[0];
    if (key === k) {
      foundValue = tuple[1];
    }
  };
  return foundValue;
};
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];
  var found = false;
  //tupleArray.each(function(value){
  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    var key = tuple[0];
    //var value = value[1];
    if (key === k) {
      //found = true;
      tuple[1] = null;
    }
  };
  this._storage.set(i, tupleArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
