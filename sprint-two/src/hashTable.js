var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];
  
  for(var j=0;j<tupleArray.length;j++){
    var tuple = tupleArray[j];
    if(k === tuple[0]){
      tuple[1] = v;
    }
  }
  
  tupleArray.push([k,v]);
  this._storage.set(k,tupleArray);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];
  
  for(var j=0;j<tupleArray.length;j++){
    var tuple = tupleArray[j];
    if(k === tuple[0]){
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  this._storage.set(k,null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
