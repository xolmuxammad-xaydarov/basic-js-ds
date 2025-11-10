const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

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
    if (this.isEmpty()) return null;

    function toPlain(node) {
      if (!node) return null;
      return {
        value: node.value,
        next: toPlain(node.next),
      };
    }

    return toPlain(this.front);
  }
  isEmpty() {
    return !this.front;
  }
  enqueue(value) {
    let node = new ListNode(value);

    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const objList = this.front;
    this.front = this.front.next;

    if (!this.front) {
      this.back = null;
    }

    return objList.value;
  }
}

module.exports = {
  Queue,
};
