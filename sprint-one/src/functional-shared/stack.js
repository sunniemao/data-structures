var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  var lastKey;
  instance.sizeLength = 0;
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  return instance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.sizeLength++;
  lastKey = this.sizeLength;
  this[lastKey] = value;
};
stackMethods.pop = function() {
  lastKey = this.sizeLength;
  var last = this[lastKey];
  delete this[lastKey];
  if (lastKey > 0) {
    this.sizeLength--;
  }
  return last;
};
stackMethods.size = function() {
  return this.sizeLength;
};
