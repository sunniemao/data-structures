var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var head = list.head;
    if (list.head) {
      list.head = list.head.next;
      return head.value; 
    } else {
      return 'No head to remove';
    } 
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var result = false;
    while (currentNode && result === false) {
      if (currentNode.value === target) {
        result = true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return result;
  };
  
  return list;
};
 
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 -> Node, add to tail and remove head should be O(1) while contains is a find 
 operation with O(n). Together, LinkedList as a whole is O(n)
*/