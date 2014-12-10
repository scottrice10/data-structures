var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[head] = value;
    head += 1;
  };

  someInstance.dequeue = function(){
    if (head > tail){
      var result = storage[tail];
      delete storage[tail];
      tail += 1;
      return result;
    }
  };

  someInstance.size = function(){
    return (head - tail);
  };

  return someInstance;
};
