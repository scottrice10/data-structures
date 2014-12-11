var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.counter] = value;
  this.counter += 1;
}

Stack.prototype.pop = function(){
  if(this.counter > 0){
    this.counter -= 1;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  };
}

Stack.prototype.size = function(){
  return this.counter;
}
