/**
 * Definition for singly-linked list.
 */

 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  var mergeTwoLists = function(list1, list2) {
    let first = list1;
    let second = list2;
    let merged = null;
    while (second && first) {
      if (first.val < second.val) {
        merged = createNode(merged, first.val)
        first = first.next;
      } else {
        merged = createNode(merged, second.val)
        second = second.next
      }
    }
    while(first) {
        merged = createNode(merged, first.val)
        first = first.next
    }
    while(second) {
       merged = createNode(merged, second.val)
        second = second.next  
    }
    return merged
  };
  
  var createNode = function(merged, data) {
    if (!merged) {
      merged = new ListNode(data)
    } else {
      let current = merged;
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(data);
    }
    return merged;
  }
  