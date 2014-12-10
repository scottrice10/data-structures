var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter += 1;
  };

  someInstance.pop = function(){
    if(counter > 0){
      counter -= 1;
      var result = storage[counter];
      delete storage[counter];
      return result;
    }

  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
