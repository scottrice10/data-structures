var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
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
  this._count += 1;

  if(this._count > Math.floor(this._limit * 0.75)){
    this.resize(this._limit * 2);
  }
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

  this._count -= 1;
  if (this._limit > 4) {
    if(this._count < Math.floor(this._limit * 0.25)){
      this.resize(this._limit / 2);
    }
  }

};

HashTable.prototype.resize = function(newSize){
  var oldStorage = this._storage;
  this._storage = LimitedArray(newSize);
  this._limit = newSize;
  this._count = 0;
  _this = this;
  oldStorage.each(function(tupleArray){
    if (tupleArray) {
      tupleArray.forEach(function(tuple){
        if (tuple[1] !== null) {
          _this.insert(tuple[0], tuple[1]);
        }
      });
    }
  });

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
