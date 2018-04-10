// A linked list is a list of elements called nodes that are connected/linked together in a single file line.

// There are 2 types of linked lists
// Singly linked lists
// Here, each node only has reference to the next node.

// Doubly linked lists
// Here, each node only has reference to the next node, but also has reference to the previous node.

// The linked list itself only needs to know about two nodes in the whole list for it to function correctly.
// It needs to know about the head node and the tail node.


/*---------Doubly Linked List Implementation--------*/

// Node constructor
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

class LinkedList {
  // LinkedList Constructor
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add a new node to the head of the linked list
  addToHead(value) {
    // create a newNode object from the Node constructor
    let newNode = new Node(value, this.head, null);
    // if this.head exists, set prev = newNode
    if (this.head) this.head.prev = newNode;
    // if not set tail to the newNode
    else this.tail = newNode;
    // set head to the newNode
    this.head = newNode;
    console.log('New head node added to the list...');
  }

  // add a new node to the tail of the linked list
  addToTail(value) {
    // create a newNode object from the Node constructor
    let newNode = new Node(value, null, this.tail);
    // if this.tail exists, set next = newNode
    if (this.tail) this.tail.next = newNode;
    // if not set tail to the newNode
    else this.head = newNode;
    // set tail to the newNode
    this.tail = newNode;
    console.log('New tail node added to the list...');
  }

  // remove head node
  removeHead() {
    // return null if list is empty
    if (!this.head) return console.log('This list is empty...');
    // store the value of the headNode in a variable
    let val = this.head.value;
    // set new head equal to the next
    this.head = this.head.next;
    // set the previous list to null if this.head exists else set tail to null
    if (this.head) this.head.prev = null;
    else this.tail = null;
    // return the deleted value
    console.log(`${val} has been removed from the list`);
    return val;
  }

  // remove tail node
  removeTail() {
    // return null if list is empty
    if (!this.tail) return console.log('This list is empty...');
    // store the value of the tail in a variable
    let val = this.tail.value;
    // set new tail equal to the prev node
    this.tail = this.tail.prev;
    // set the previous list to null if this.tail exists else set head to null
    if (this.tail) this.tail.next = null;
    else this.head = null;
    // return the deleted value
    console.log(`${val} has been removed from the list`);
    return val;
  }

  // search
  search(searchValue) {
    // return null if list is empty
    if (!this.head) return console.log('This list is empty...');
    // set a variable to be used in a loop
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === searchValue) return currentNode.value;
      currentNode = currentNode.next;
    }

    console.log(`${searchValue} could not be found`);
    return null;
  }
}