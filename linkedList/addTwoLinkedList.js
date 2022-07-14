/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    this.head = null;
    let current = this.head;
    while (l1 || l2) {
      let sum = 0
      if (l1 !== null) {
        sum += l1.val
        l1 = l1.next
      }
      if (l2 !== null) {
        sum += l2.val
        l2 = l2.next
      }
      sum = sum + carry;
      let node = sum % 10;
      if (this.head === null) {
        this.head = new CreateNode(node)
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = new CreateNode(node)
      }
      carry = Math.floor(sum / 10);
    }
    if (carry === 1) {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new CreateNode(carry)
    }
    return this.head
  };
  
  class CreateNode {
    constructor(data) {
      this.val = data;
      this.next = null
    }
  }
  