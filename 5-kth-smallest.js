function kthSmallest(root, k) {
  const stack = [];
  let current = root;
  let n = 0;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    n++;

    if (n === k) {
      return current.val;
    }
    current = current.right;
  }
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4),
);

console.log(kthSmallest(root, 3));
