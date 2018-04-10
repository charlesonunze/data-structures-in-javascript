// A linked list is a list of elements called nodes that are connected/linked together in a single file line.

// There are 2 types of linked lists
// Singly linked lists
// Here, each node only has reference to the next node.

// Doubly linked lists
// Here, each node only has reference to the next node, but also has reference to the previous node.

// The linked list itself only needs to know about two nodes in the whole list for it to function correctly.
// It needs to know about the head node and the tail node.


/*---------Singly Linked List Implementation--------*/

// Node constructor
function Node(data) {
  this.data = data;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }

  remove(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
        this.numberOfValues--;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
        }
        this.numberOfValues++;
      }
      current = current.next;
    }
  }

  traverse(fn) {
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.next;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    let string = '';
    let current = this.head;
    while (current) {
      string += `${current.data} `;
      current = current.next;
    }
    console.log(string.trim());
  }
}