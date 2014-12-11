var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  return _.extend(someInstance, queueMethods);
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.head] = value;
  this.head += 1;
};

queueMethods.dequeue = function(){
  if (this.head > this.tail){
    var result = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail += 1;
    return result;
  }
};

queueMethods.size = function(){
  return this.head - this.tail;
};



