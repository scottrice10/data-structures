var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.counter = 0;

  return _.extend(someInstance, stackMethods);
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter += 1;
}

stackMethods.pop = function(){
  if(this.counter > 0){
    this.counter -= 1;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  };
}

stackMethods.size = function(){
  return this.counter;
}




