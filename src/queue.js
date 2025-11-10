const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  getUnderlyingList() {
    if (!this.isEmpty()) {
      let obj = this.front;
      return obj;
    }
  }
  isEmpty() {
    return !this.front; //front not null
  }
  enqueue(value) {
    let node = new ListNode(value);

    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node; //pushing next elem new node
      this.back = node; //move back poiter to new node
    }
    console.log(node);
  }

  dequeue() {
    let objList = this.front;

    if (!this.isEmpty()) {
      this.front = this.front.next;
    }
    //check past item and set to it's back null
    if (!this.front) {
      this.back = null; //set back to null
    }
    this.getUnderlyingList(); //print
    return objList.value;
  }
}

module.exports = {
  Queue,
};
