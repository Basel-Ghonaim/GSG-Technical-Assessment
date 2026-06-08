class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeElements(head, x) {
  while (head !== null && head.val === x) {
    head = head.next;
  }

  let current = head;
  while (current !== null && current.next !== null) {
    if (current.next.val === x) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(4)))),
);

head = removeElements(head, 2);

let result = [];
while (head) {
  result.push(head.val);
  head = head.next;
}
console.log(result.join(" -> "));
