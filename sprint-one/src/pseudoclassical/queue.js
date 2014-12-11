var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.head] = value;
  this.head += 1;
};

Queue.prototype.dequeue = function(){
  if (this.head > this.tail){
    var result = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail += 1;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.head - this.tail;
};


