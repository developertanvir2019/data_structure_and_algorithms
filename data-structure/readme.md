Arrays:

Arrays are used to store ordered collections of values.
Example:
javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
Objects:

Objects are used to store key-value pairs.
Example:
javascript
Copy code
let person = {
name: 'John',
age: 30,
profession: 'developer'
};
Sets:

Sets store unique values, and duplicate values are automatically removed.
Example:
javascript
Copy code
let uniqueNumbers = new Set([1, 2, 3, 4, 4, 5]);
Maps:

Maps store key-value pairs similar to objects but with some differences, such as allowing any data type as keys.
Example:
javascript
Copy code
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
Linked Lists:

Although not a built-in data structure, you can implement linked lists in JavaScript using objects or classes.
Example:
javascript
Copy code
class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
Stacks:

Stacks follow the Last In, First Out (LIFO) principle. You can use arrays or linked lists to implement stacks.
Example (using an array):
javascript
Copy code
let stack = [];
stack.push(1);
stack.push(2);
let poppedValue = stack.pop();
Queues:

Queues follow the First In, First Out (FIFO) principle. Arrays or linked lists can also be used to implement queues.
Example (using an array):
javascript
Copy code
let queue = [];
queue.push(1);
queue.push(2);
let dequeuedValue = queue.shift();
Trees:

Trees are hierarchical data structures. You can represent trees using classes or objects.
Example:
javascript
Copy code
class TreeNode {
constructor(value) {
this.value = value;
this.children = [];
}
}

let root = new TreeNode(1);
root.children.push(new TreeNode(2));
root.children.push(new TreeNode(3));
These are some of the basic data structures in JavaScript. Depending on your specific use case, you might choose one data structure over another for better performance and functionality.
